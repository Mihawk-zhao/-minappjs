/*
 * @Author: your name
 * @Date: 2020-05-18 18:02:23
 * @LastEditTime: 2020-05-18 18:35:03
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/weapp/src/fetch/user/anonymous.ts
 */ 

import { getBaaSF } from './utils/utils'

//
function fetchAnonymous(){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject)=>{
    BaaS_F.auth.anonymousLogin().then((user: any) => {
      resolve(user)
    }).catch((err: any) => {
      // HError
      reject(err)
    })
  })
}

export default fetchAnonymous