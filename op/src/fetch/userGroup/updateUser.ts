/*
 * @Author: your name
 * @Date: 2020-05-18 16:39:44
 * @LastEditTime: 2020-05-18 17:45:53
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/op/src/fetch/userGroup/updateUser.ts
 */ 
import fetchGetUser from './getUser'

import { getBaaSF, isArray } from '../../utils/utils'
import { UPDATE_METHORD } from '../../constants/constants'
import { UPDATE_ERROR } from '../../constants/error'


type dataType = string | string[] | number | number[] | boolean | boolean[] | null | undefined | {
  [propName: string] : any
} | {
  [index: number]: any
}


type upMethodList = 'incr' | 'set' | 'unset' | 'patchObject' | 'append' | 'remove' | 'uAppend'



function fetchUpdateUser(...data: [number, {
  [propName: string]: [upMethodList, dataType] | dataType
}]){
  let BaaS_F = getBaaSF()

  //op 运营后台
  let [uid, params] = data
  return new Promise((resolve, reject) => {
    let updata: any = {}
    for(let pa in params){
      if(!isArray(params[pa])){
        //不是数组，则直接 set
        updata[pa] = params[pa]
        continue
      }
      if(UPDATE_METHORD.indexOf(params[pa][0]) > -1 ){
        switch(params[pa][0]){
          case 'set':
            updata[pa] = params[pa][1]
            break
          case 'unset':
            updata[pa] = {}
            updata[pa]['$unset'] = ''
            break
          case 'incr':
            updata[pa] = {}
            updata[pa]['$incr_by'] = params[pa][1]
            break
          case 'append':
            updata[pa] = {}
            updata[pa]['$append'] = Array.isArray(params[pa][1]) ? params[pa][1] : [params[pa][1]]
            break
          case 'uAppend':
            updata[pa] = {}
            updata[pa]['$append_unique'] = Array.isArray(params[pa][1]) ? params[pa][1] : [params[pa][1]]
            break
          case 'remove':
            updata[pa] = {}
            updata[pa]['$remove'] = Array.isArray(params[pa][1]) ? params[pa][1] : [params[pa][1]]
            break
          case 'patchObject':
            updata[pa] = {}
            updata[pa]['$update'] = params[pa][1]
            break
          default:
            throw new Error(UPDATE_ERROR)
        }
      }else{
        //直接 set
        updata[pa] = params[pa]
      }
    }
    BaaS_F({
      method: 'put',
      url: 'https://cloud.minapp.com/userve/v2.2/miniapp/user_profile/',
      params: {
        where: {
          "id": {"$eq": uid}
        },
        limit: 1,
        offset: 0,
        return_total_count: 0,
      },
      data: updata
    }).then((res: any) => {
      fetchGetUser()(uid).then(user => {
        resolve(user)
      }, err => {
        reject(err)
      })
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchUpdateUser(){
  return fetchUpdateUser
}

export default initFetchUpdateUser