/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:11
 * @LastEditTime: 2020-06-02 11:32:34
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@minappjs/cloud/src/verifySmsCode.ts
 */ 

import { getBaaSF } from './utils/utils'


function fetchVerifySmsCode(phone: string, code: number, userID?: number){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject)=>{
    BaaS_F.verifySmsCode({phone: phone, code: code, userID: userID}).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


export default fetchVerifySmsCode