/*
 * @Author: your name
 * @Date: 2020-01-23 17:44:21
 * @LastEditTime: 2020-05-18 16:47:36
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

  return new Promise((resolve, reject)=>{
    BaaS_F.get(`https://cloud.minapp.com/userve/v2.2/content/${contentGroupID}/category`, {
      params: {
        limit: params.limit || 100,
        return_total_count: params.withCount ? 1 : 0,
      }
    }).then((res: any) => {
      resolve(res)
    }).catch((err: any)=>{
      reject(err)
    })
  })
}

function initFindCategory(){
  return fetchFindCategory
}

export default initFindCategory