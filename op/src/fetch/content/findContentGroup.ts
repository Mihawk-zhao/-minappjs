/*
 * @Author: your name
 * @Date: 2020-05-18 16:39:44
 * @LastEditTime: 2020-05-18 16:49:33
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/op/src/fetch/content/findContentGroup.ts
 */ 

import { getBaaSF } from '../../utils/utils'


function fetchFindContentGroup(params:{
  page?: number
  limit?: number
  withCount?: boolean
} = {}){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject)=>{
    BaaS_F.get(`https://cloud.minapp.com/userve/v2.2/content/`, {
      params: {
        limit: params.limit || 20,
        offset: (params.limit || 20) * ((params.page || 1) - 1),
        return_total_count: params.withCount ? 1 : 0,
      }
    }).then((res: any) => {
      resolve(res)
    }).catch((err: any)=>{
      reject(err)
    })
  })
}


function initFetchFindContentGroup(){
  return fetchFindContentGroup
}

export default initFetchFindContentGroup