/*
 * @Author: your name
 * @Date: 2020-01-23 18:19:36
 * @LastEditTime: 2020-05-18 16:50:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /minapp-fetch/src/fetch/content/getCategory.ts
 */

import { getBaaSF } from '../../utils/utils'


function fetchGetCategory(contentGroupID: number, categoryID: number){
  let BaaS_F = getBaaSF()


  //op 运营后台
  return new Promise((resolve, reject)=>{
    BaaS_F.get(`https://cloud.minapp.com/userve/v2.2/content/${contentGroupID}/category/${categoryID}/`).then((res: any) => {
      resolve(res)
    }).catch((err: any)=>{
      reject(err)
    })
  })
}


function initFetchGetCategory(){
  return fetchGetCategory
}

export default initFetchGetCategory