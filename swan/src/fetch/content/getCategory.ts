/*
 * @Author: your name
 * @Date: 2020-01-23 18:19:36
 * @LastEditTime: 2020-05-18 18:16:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /minapp-fetch/src/fetch/content/getCategory.ts
 */

import { getBaaSF } from '../../utils/utils'

function fetchGetCategory(contentGroupID: number, categoryID: number){
  let BaaS_F = getBaaSF()

  return new Promise((resolve: any, reject: any)=>{
    let MyContentGroup = new BaaS_F.ContentGroup(contentGroupID)
    MyContentGroup.getCategory(categoryID).then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // err
      reject(err)
    })
  })
}


function initFetchGetCategory(){
  return fetchGetCategory
}

export default initFetchGetCategory