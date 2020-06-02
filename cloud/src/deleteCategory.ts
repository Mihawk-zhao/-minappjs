/*
 * @Author: your name
 * @Date: 2020-04-16 19:21:06
 * @LastEditTime: 2020-06-02 11:25:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /minapp-fetch/src/fetch/content/deleteCategory.ts
 */

import { getBaaSF } from './utils/utils'

function fetchDeleteCategory(contentGroupID: number, categoryID: number){
  let BaaS_F = getBaaSF()

  return new Promise((resolve: any, reject: any)=>{
    let MyContentCategory = new BaaS_F.ContentCategory(contentGroupID)
    MyContentCategory.delete(categoryID).then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // err
      reject(err)
    })
  })
  
}

export default fetchDeleteCategory