/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:11
 * @LastEditTime: 2020-05-18 15:11:33
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/cloud/src/fetch/table/getTableList.ts
 */ 

import { getBaaSF } from './utils/utils'


function fetchGetTableList(params: {
  limit?: number
  page?: number
  name?: string
} = {}){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject)=>{
    let tableSchema = new BaaS_F.TableSchema()
    tableSchema.getSchemaList({
      ...params,
      limit: params.limit || 20,
      offset: (params.limit || 20) * ((params.page || 1) - 1)
    }).then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // HError 对象
      reject(err)
    })
  })
}


function initFetchGetTableList(){
  return fetchGetTableList
}

export default initFetchGetTableList