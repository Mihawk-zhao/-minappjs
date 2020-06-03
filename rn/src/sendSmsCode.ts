/*
 * @Author: your name
 * @Date: 2020-05-18 18:02:23
 * @LastEditTime: 2020-06-03 19:39:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/weapp/src/fetch/message/sendSmsCode.ts
 */ 

import { getBaaSF } from './utils/utils'



function fetchSendSmsCode(phone: string, signatureID: number,){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject)=>{
    BaaS_F.sendSmsCode({
      phone: phone,
      signatureID: signatureID,
    }).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}

export default fetchSendSmsCode