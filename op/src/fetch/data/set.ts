/*
 * @Author: your name
 * @Date: 2020-05-18 16:39:44
 * @LastEditTime: 2020-05-18 16:57:05
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/op/src/fetch/data/set.ts
 */ 

import { getBaaSF, changeSetParams } from '../../utils/utils'

type dataType = string | string[] | number | number[] | boolean | boolean[] | null | undefined | {
  [propName: string] : any
} | {
  [index: number]: any
}


function fetchSet(table: string | number, params: {
  [propName: string]: ['geo', ...any[]] | dataType
}){
  let BaaS_F = getBaaSF()

  //op 运营后台
  return new Promise((resolve, reject)=>{
    BaaS_F.post(`https://cloud.minapp.com/userve/v2.4/table/${table}/record/`, changeSetParams(params)).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
  
}


function initFetchSet(){
  return fetchSet
}

export default initFetchSet