/*
 * @Author: your name
 * @Date: 2020-04-16 19:21:06
 * @LastEditTime: 2020-05-18 16:46:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /minapp-fetch/src/fetch/content/deleteCategory.ts
 */

import { getBaaSF } from '../../utils/utils'


function fetchDeleteCategory(contentGroupID: number, categoryID: number){
  let BaaS_F = getBaaSF()
  //op 运营后台
  return new Promise((resolve, reject) => {
    BaaS_F.delete(`https://cloud.minapp.com/userve/v2.2/content/${contentGroupID}/category/${categoryID}/`).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
  
}


function initFetchDeleteCategory(){
  return fetchDeleteCategory
}

export default initFetchDeleteCategory