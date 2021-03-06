/*
 * @Author: your name
 * @Date: 2020-05-18 16:39:44
 * @LastEditTime: 2020-05-18 17:33:35
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/op/src/fetch/message/verifySmsCode.ts
 */ 

import { getBaaSF } from '../../utils/utils'



function fetchVerifySmsCode(phone: string, code: number, userID?: number){
  let BaaS_F = getBaaSF()

  //op 运营后台
  return new Promise((resolve, reject)=>{
    BaaS_F.get(`https://cloud.minapp.com/userve/v1.8/sms-verification-code/verify/`, {
      params: {
        phone: phone,
        code: code,
        user_id: userID
      }
    }).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchVerifySmsCode(){
  return fetchVerifySmsCode
}

export default initFetchVerifySmsCode