/*
 * @Author: your name
 * @Date: 2020-05-18 16:39:44
 * @LastEditTime: 2020-05-18 17:35:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/op/src/fetch/table/getTable.ts
 */ 

import { getBaaSF } from '../../utils/utils'


function fetchGetTable(table: string | number){
  let BaaS_F = getBaaSF()

  //op 运营后台
  return new Promise((resolve, reject)=>{
    BaaS_F.get(`https://cloud.minapp.com/userve/v1.8/table/${table}/`).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchGetTable(){
  return fetchGetTable
}

export default initFetchGetTable