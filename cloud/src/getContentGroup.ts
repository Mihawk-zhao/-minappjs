/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:11
 * @LastEditTime: 2020-05-18 14:44:37
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/cloud/src/fetch/content/getContentGroup.ts
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


function initFetchGetContentGroup(){
  return fetchGetContentGroup
}

export default initFetchGetContentGroup