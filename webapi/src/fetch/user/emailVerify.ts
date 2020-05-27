/*
 * @Author: your name
 * @Date: 2020-05-18 19:46:11
 * @LastEditTime: 2020-05-27 15:37:30
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@minappjs/webapi/src/fetch/user/emailVerify.ts
 */ 

import { setArgs, getBaaSF } from '../../utils/utils'

let ArgsObj: {
  RequestBase?: string | undefined
  Header?: {
    'Content-Type'?: string
    'X-Hydrogen-Client-ID'?: string,
    'Authorization'?: string,
    'X-Hydrogen-Env-ID'?: string,
  }
}

//
function fetchEmailVerify(){
  let BaaS_F = getBaaSF()

  //webapi
  return new Promise((resolve, reject)=>{
    BaaS_F({
      method: 'post',
      url: `${ArgsObj.RequestBase}/hserve/v2.0/user/email-verify/`,
      headers: ArgsObj.Header
    }).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchEmailVerify(args: {clientID: string, host?: string, accessToken?: string, env?: string}){
  ArgsObj = setArgs(args)
  return fetchEmailVerify
}

export default initFetchEmailVerify