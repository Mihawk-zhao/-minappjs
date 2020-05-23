/*
 * @Author: your name
 * @Date: 2020-05-18 18:02:23
 * @LastEditTime: 2020-05-18 18:41:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/weapp/src/fetch/user/passwordReset.ts
 */ 

import { getBaaSF } from '../../utils/utils'

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


function initFetchPasswordReset(){
  return fetchPasswordReset
}

export default initFetchPasswordReset