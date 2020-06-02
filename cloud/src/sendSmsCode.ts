/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:11
 * @LastEditTime: 2020-06-02 11:30:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@minappjs/cloud/src/sendSmsCode.ts
 */ 

import { getBaaSF } from './utils/utils'


function fetchSendSmsCode(phone: string, signatureID: number, userID?: number){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject)=>{
    BaaS_F.sendSmsCode({
      phone: phone,
      signatureID: signatureID,
      userID: userID,
    }).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}

export default fetchSendSmsCode