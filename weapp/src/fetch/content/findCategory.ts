/*
 * @Author: your name
 * @Date: 2020-01-23 17:44:21
 * @LastEditTime: 2020-05-18 18:13:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /minapp-fetch/src/fetch/content/findCategory.ts
 */

import { getBaaSF } from '../../utils/utils'


function fetchFindCategory(contentGroupID: number, params: {
  page?: number
  limit?: number
  orderBy?: '-created_at' | 'created_at' | '-updated_at' | 'updated_at'
  withCount?: boolean
} = {}){
  let BaaS_F = getBaaSF()

  return new Promise((resolve: any, reject: any)=>{
    let MyContentGroup = new BaaS_F.ContentGroup(contentGroupID)
    MyContentGroup.getCategoryList({
      withCount: params.withCount || false
    }).then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // err
      reject(err)
    })
  })

  
}


function initFindCategory(){
  return fetchFindCategory
}

export default initFindCategory