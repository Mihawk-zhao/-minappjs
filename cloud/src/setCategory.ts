/*
 * @Author: your name
 * @Date: 2020-04-16 19:19:57
 * @LastEditTime: 2020-06-02 11:30:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /minapp-fetch/src/fetch/content/setCategory.ts
 */
import { getBaaSF } from './utils/utils'

function fetchSetCategory(contentGroupID: number, params: {
  name: string
  parent?: number
} = {name: ''}){
  let BaaS_F = getBaaSF()
  return new Promise((resolve: any, reject: any)=>{
    let MyContentCategory = new BaaS_F.ContentCategory(contentGroupID)
    MyContentCategory.create(params).then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // err
      reject(err)
    })
  })
}

export default fetchSetCategory