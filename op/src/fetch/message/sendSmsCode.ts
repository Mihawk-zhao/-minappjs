/*
 * @Author: your name
 * @Date: 2020-05-18 16:39:44
 * @LastEditTime: 2020-05-18 17:33:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/op/src/fetch/message/sendSmsCode.ts
 */ 

import { getBaaSF } from '../../utils/utils'



function fetchSendSmsCode(phone: string, signatureID: number, userID?: number){
  let BaaS_F = getBaaSF()

  //op 运营后台
  return new Promise((resolve, reject)=>{
    BaaS_F.get(`https://cloud.minapp.com/userve/v2.1/sms-verification-code/`, {
      params: {
        phone: phone,
        signature_id: signatureID,
        user_id	: userID,
      }
    }).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchSendSmsCode(){
  return fetchSendSmsCode
}

export default initFetchSendSmsCode