/*
 * @Author: your name
 * @Date: 2020-05-18 18:02:23
 * @LastEditTime: 2020-06-03 19:24:37
 * @LastEditors: Please set LastEditors
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