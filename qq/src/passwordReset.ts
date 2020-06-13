/*
 * @Author: your name
 * @Date: 2020-05-18 18:02:23
 * @LastEditTime: 2020-06-06 08:56:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/weapp/src/fetch/user/passwordReset.ts
 */ 

import { getBaaSF } from './utils/utils'

//
function fetchPasswordReset(params: {
  email: string
}){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject)=>{
    BaaS_F.auth.requestPasswordReset(params).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      // HError
      reject(err)
    })
  })
}

export default fetchPasswordReset