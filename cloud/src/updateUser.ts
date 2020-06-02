/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:12
 * @LastEditTime: 2020-06-02 11:32:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/cloud/src/fetch/userGroup/updateUser.ts
 */ 
import { getBaaSF, isArray } from './utils/utils'
import { UPDATE_METHORD } from './constants/constants'
import { UPDATE_ERROR } from './constants/error'


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

  let [uid, params] = data
  return new Promise((resolve, reject) => {
    let MyUser = new BaaS_F.User()
    let user = MyUser.getWithoutData(uid)
    // age 为自定义字段
    for(let pa in params){
      if(!isArray(params[pa])){
        //不是数组，则直接 set
        user.set(pa, params[pa])
        continue
      }
      if(UPDATE_METHORD.indexOf(params[pa][0]) > -1 ){
        switch(params[pa][0]){
          case 'set':
            user.set(pa, params[pa][1])
            break
          case 'unset':
            user.unset(pa)
            break
          case 'incr':
            user.incrementBy(pa, params[pa][1])
            break
          case 'append':
            user.append(pa, Array.isArray(params[pa][1]) ? params[pa][1] : [params[pa][1]])
            break
          case 'uAppend':
            user.uAppend(pa, Array.isArray(params[pa][1]) ? params[pa][1] : [params[pa][1]])
            break
          case 'remove':
            user.remove(pa, Array.isArray(params[pa][1]) ? params[pa][1] : [params[pa][1]])
            break
          case 'patchObject':
            user.patchObject(pa, params[pa][1])
            break
          default:
            throw new Error(UPDATE_ERROR)
        }
      }else{
        //直接 set
        user.set(pa, params[pa])
      }
    }
    user.update().then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // err
      reject(err)
    })
  })
}


export default fetchUpdateUser