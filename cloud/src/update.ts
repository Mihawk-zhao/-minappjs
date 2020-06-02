/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:11
 * @LastEditTime: 2020-05-18 14:55:45
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/cloud/src/fetch/data/update.ts
 */ 

import { getBaaSF, cloneDeep, isArray } from './utils/utils'
import { UPDATE_METHORD } from './constants/constants'
import { UPDATE_ERROR } from './constants/error'



type dataType = string | string[] | number | number[] | boolean | boolean[] | null | undefined | {
  [propName: string] : any
} | {
  [index: number]: any
}


type upMethodList = 'incr' | 'set' | 'unset' | 'patchObject' | 'geo' | 'append' | 'remove' | 'uAppend'


function fetchUpdate(table: string | number, id: string, params: {
  [propName: string]: [upMethodList, dataType] | dataType
}){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject)=>{
    let Product = new BaaS_F.TableObject(table)
    let records = Product.getWithoutData(id)
    for(let pa in params){
      if(!isArray(params[pa])){
        //不是数组，则直接 set
        records.set(pa, params[pa])
        continue
      }
      if(UPDATE_METHORD.indexOf(params[pa][0]) > -1 ){
        switch(params[pa][0]){
          case 'set':
            records.set(pa, params[pa][1])
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
            records.set(pa, tempGeo)
            break
          case 'unset':
            records.unset(pa)
            break
          case 'incr':
            records.incrementBy(pa, params[pa][1])
            break
          case 'append':
            records.append(pa, Array.isArray(params[pa][1]) ? params[pa][1] : [params[pa][1]])
            break
          case 'uAppend':
            records.uAppend(pa, Array.isArray(params[pa][1]) ? params[pa][1] : [params[pa][1]])
            break
          case 'remove':
            records.remove(pa, Array.isArray(params[pa][1]) ? params[pa][1] : [params[pa][1]])
            break
          case 'patchObject':
            records.patchObject(pa, params[pa][1])
            break
          default:
            throw new Error(UPDATE_ERROR)
        }
      }else{
        //直接 set
        records.set(pa, params[pa])
      }
    }
    records.update().then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // err
      reject(err)
    })
  })
}


function initFetchUpdate(){
  return fetchUpdate
}

export default initFetchUpdate