/*
 * @Author: your name
 * @Date: 2020-04-16 19:20:44
 * @LastEditTime: 2020-05-18 16:52:52
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

  //op 运营后台
  return new Promise((resolve, reject)=>{
    BaaS_F.put(`https://cloud.minapp.com/userve/v2.2/content/${contentGroupID}/category/${categoryID}/`, params).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchUpdateCategory(){
  return fetchUpdateCategory
}

export default initFetchUpdateCategory