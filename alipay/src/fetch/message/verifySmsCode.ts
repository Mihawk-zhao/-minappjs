/*
 * @Author: your name
 * @Date: 2020-05-18 18:02:23
 * @LastEditTime: 2020-05-18 18:30:46
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/weapp/src/fetch/message/verifySmsCode.ts
 */ 

import { getBaaSF } from '../../utils/utils'


function fetchVerifySmsCode(phone: string, code: number, userID?: number){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject)=>{
    BaaS_F.verifySmsCode({phone: phone, code: code}).then((res: any) => {
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