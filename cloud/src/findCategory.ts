/*
 * @Author: your name
 * @Date: 2020-01-23 17:44:21
 * @LastEditTime: 2020-06-02 11:26:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /minapp-fetch/src/fetch/content/findCategory.ts
 */

import { getBaaSF } from './utils/utils'

function fetchFindCategory(contentGroupID: number, params: {
  page?: number
  limit?: number
  orderBy?: '-created_at' | 'created_at' | '-updated_at' | 'updated_at'
  withCount?: boolean
} = {}){
  let BaaS_F = getBaaSF()

  return new Promise((resolve: any, reject: any)=>{
    let MyContentCategory = new BaaS_F.ContentCategory(contentGroupID)
    MyContentCategory.limit(params.limit || 20).offset((params.limit || 20) * ((params.page || 1) - 1)).orderBy(params.orderBy || '-created_at').find({withCount: params.withCount || false}).then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // err
      reject(err)
    })
  })
  
}

export default fetchFindCategory