/*
 * @Author: your name
 * @Date: 2020-05-18 18:02:23
 * @LastEditTime: 2020-06-03 20:55:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/weapp/src/fetch/user/loginWithSmsVerificationCode.ts
 */ 

import { getBaaSF } from './utils/utils'


//
function fetchLoginWithSmsVerificationCode(
  phone: string, 
  code: string, 
  params?: {
  createUser?: boolean
}){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject)=>{
    BaaS_F.auth.loginWithSmsVerificationCode(phone, code, { createUser: params.createUser.toString() === 'false' ? false : true }).then((user: any) => {
      resolve(user)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


export default fetchLoginWithSmsVerificationCode