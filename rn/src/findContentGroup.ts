/*
 * @Author: your name
 * @Date: 2020-05-18 18:02:23
 * @LastEditTime: 2020-06-03 19:32:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/weapp/src/fetch/content/findContentGroup.ts
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

export default fetchFindContentGroup