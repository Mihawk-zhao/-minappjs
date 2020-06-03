/*
 * @Author: your name
 * @Date: 2020-05-18 18:02:23
 * @LastEditTime: 2020-06-03 19:39:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/weapp/src/fetch/user/register.ts
 */ 

import { getBaaSF } from './utils/utils'


//
function fetchRegister(params: {
  email?: string
  username?: string
  phone?: string
  password: string
}){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject)=>{
    BaaS_F.auth.register(params).then((user: any) => {
      resolve(user)
    }).catch((err: any) => {
      // HError 对象
      reject(err)
    })
  })
}

export default fetchRegister