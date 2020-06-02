/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:11
 * @LastEditTime: 2020-05-18 15:10:57
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/cloud/src/fetch/table/getTable.ts
 */ 

import { getBaaSF } from './utils/utils'


function fetchGetTable(table: string | number){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject)=>{
    let tableSchema = new BaaS_F.TableSchema()
    tableSchema.getSchema(table).then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // HError 对象
      reject(err)
    })
  })
}


function initFetchGetTable(){
  return fetchGetTable
}

export default initFetchGetTable