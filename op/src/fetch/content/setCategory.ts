/*
 * @Author: your name
 * @Date: 2020-04-16 19:19:57
 * @LastEditTime: 2020-05-18 16:51:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /minapp-fetch/src/fetch/content/setCategory.ts
 */
import { getBaaSF } from '../../utils/utils'


function fetchSetCategory(contentGroupID: number, params: {
  name: string
  parent?: number
} = {name: ''}){
  let BaaS_F = getBaaSF()

  //op 运营后台
  return new Promise((resolve, reject)=>{
    BaaS_F.post(`https://cloud.minapp.com/userve/v2.2/content/${contentGroupID}/category/`, params).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchSetCategory(){
  return fetchSetCategory
}

export default initFetchSetCategory