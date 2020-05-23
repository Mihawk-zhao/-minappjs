/*
 * @Author: your name
 * @Date: 2020-04-16 19:18:29
 * @LastEditTime: 2020-05-18 16:53:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /minapp-fetch/src/fetch/content/updateContent.ts
 */

import { getBaaSF, cloneDeep, isArray } from '../../utils/utils'
import { UPDATE_METHORD } from '../../constants/constants'
import { UPDATE_ERROR } from '../../constants/error'


type dataType = string | string[] | number | number[] | boolean | boolean[] | null | undefined | {
  [propName: string] : any
} | {
  [index: number]: any
}


type upMethodList = 'incr' | 'set' | 'unset' | 'patchObject' | 'geo' | 'append' | 'remove' | 'uAppend'


function fetchUpdateContent(contentGroupID: number, richTextID: number, params: {
  [propName: string]: [upMethodList, dataType] | dataType
}){
  let BaaS_F = getBaaSF()


  //op 运营后台
  return new Promise((resolve, reject)=>{
    let updata:any = {}

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
          case 'geo':
            let temp = params[pa], tempGeo = {}
            temp.shift()
            if(temp.length > 1){
              tempGeo = cloneDeep({
                type: 'Polygon',
                coordinates: [temp]
              })
            }else{
              tempGeo = cloneDeep({
                type: 'Point',
                coordinates: temp[0]
              })
            }
            updata[pa] = tempGeo
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
    
    BaaS_F.put(`https://cloud.minapp.com/userve/v2.2/content/${contentGroupID}/text/${richTextID}/`, updata).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
  
}


function initFetchUpdateContent(){
  return fetchUpdateContent
}

export default initFetchUpdateContent