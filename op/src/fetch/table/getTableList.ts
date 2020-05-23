/*
 * @Author: your name
 * @Date: 2020-05-18 16:39:44
 * @LastEditTime: 2020-05-18 17:36:14
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/op/src/fetch/table/getTableList.ts
 */ 

import { getBaaSF } from '../../utils/utils'


function fetchGetTableList(params: {
  limit?: number
  page?: number
  name?: string
} = {}){
  let BaaS_F = getBaaSF()

  //op 运营后台
  return new Promise((resolve, reject)=>{
    BaaS_F.get('https://cloud.minapp.com/userve/v1.8/table/', {
      params: {
        ...params,
        limit: params.limit || 20,
        offset: (params.limit || 20) * ((params.page || 1) - 1)
      }
    }).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchGetTableList(){
  return fetchGetTableList
}

export default initFetchGetTableList