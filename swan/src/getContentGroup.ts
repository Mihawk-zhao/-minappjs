/*
 * @Author: your name
 * @Date: 2020-05-18 18:02:23
 * @LastEditTime: 2020-06-06 08:53:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/weapp/src/fetch/content/getContentGroup.ts
 */ 

import { getBaaSF } from './utils/utils'

function fetchGetContentGroup(contentGroupID: number){
  let BaaS_F = getBaaSF()


  return new Promise((resolve, reject)=>{
    BaaS_F.ContentGroup.get(contentGroupID).then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // err
      reject(err)
    })
  })
}

export default fetchGetContentGroup