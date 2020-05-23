/*
 * @Author: your name
 * @Date: 2020-05-18 16:39:44
 * @LastEditTime: 2020-05-18 17:50:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/op/src/fetch/data/get.ts
 */ 

import { getBaaSF } from '../../utils/utils'


function fetchGet(table: string | number, id: string, params: {
  select?: string[]
  expand?: string[]
} = {}){
  let BaaS_F = getBaaSF()


  //op 运营后台
  return new Promise((resolve, reject)=>{
    BaaS_F.get(`https://cloud.minapp.com/userve/v2.4/table/${table}/record/${id}/`, {
      params: {
        expand: (params.expand || []).toString(),
      }
    }).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchGet(){
  return fetchGet
}

export default initFetchGet