/*
 * @Author: your name
 * @Date: 2020-04-16 19:16:57
 * @LastEditTime: 2020-05-18 14:46:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /minapp-fetch/src/fetch/content/setContent.ts
 */

import { getBaaSF } from './utils/utils'


function fetchSetContent(contentGroupID: number, params: {
  title?: string
  content?: string
  cover?: any
  description?: string
  categories?: number[]
  [propName: string]: any
} = {}){
  let BaaS_F = getBaaSF()
  return new Promise((resolve: any, reject: any)=>{
    let MyContent = new BaaS_F.Content(contentGroupID)
    let content = MyContent.create()
    content.set(params).save().then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // err
      reject(err)
    })
  })
}


function initFetchSetContent(){
  return fetchSetContent
}

export default initFetchSetContent