/*
 * @Author: your name
 * @Date: 2020-04-16 19:20:44
 * @LastEditTime: 2020-05-18 14:47:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /minapp-fetch/src/fetch/content/updateCategory.ts
 */

import { getBaaSF } from '../../utils/utils'


function fetchUpdateCategory(contentGroupID: number, categoryID: number, params: {
  name: string
  parent?: number
} = {name: ''}){
  let BaaS_F = getBaaSF()

  return new Promise((resolve: any, reject: any)=>{
    let MyContentCategory = new BaaS_F.ContentCategory(contentGroupID)
    MyContentCategory.update(categoryID, params).then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // err
      reject(err)
    })
  })
}


function initFetchUpdateCategory(){
  return fetchUpdateCategory
}

export default initFetchUpdateCategory