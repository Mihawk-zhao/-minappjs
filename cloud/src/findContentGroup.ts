/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:11
 * @LastEditTime: 2020-05-18 14:42:18
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/cloud/src/fetch/content/findContentGroup.ts
 */ 

import { getBaaSF } from './utils/utils'


function fetchFindContentGroup(params:{
  page?: number
  limit?: number
  withCount?: boolean
} = {}){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject)=>{
    BaaS_F.ContentGroup.find({
      withCount: params.withCount || false,
      offset: (params.limit || 20) * ((params.page || 1) - 1),
      limit: params.limit || 20
    }).then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // err
      reject(err)
    })
  })
}


function initFetchFindContentGroup(){
  return fetchFindContentGroup
}

export default initFetchFindContentGroup