/*
 * @Author: your name
 * @Date: 2020-05-18 18:02:23
 * @LastEditTime: 2020-06-03 20:50:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/weapp/src/fetch/user/currentUser.ts
 */ 

import { getBaaSF } from './utils/utils'


//
function fetchCurrentUser(){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject)=>{
    BaaS_F.auth.getCurrentUser().then((user: any) => {
      // user 为 currentUser 对象
      resolve(user)
    }).catch((err: any) => {
      // HError  
      reject(err)
    })
  })
}

export default fetchCurrentUser