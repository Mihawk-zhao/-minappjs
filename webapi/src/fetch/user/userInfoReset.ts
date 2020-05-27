/*
 * @Author: your name
 * @Date: 2020-05-18 19:46:11
 * @LastEditTime: 2020-05-27 15:53:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@minappjs/webapi/src/fetch/userGroup/updateUser.ts
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


function fetchUserInfoReset(params: {
  email?: string
  username?: string
  phone?: string
  password?: string
  new_password?: string
}){
  let BaaS_F = getBaaSF()

  //webapi
  return new Promise((resolve, reject)=>{
    BaaS_F({
      method: 'put',
      url: `${ArgsObj.RequestBase}/hserve/v2.1/user/account/`,
      headers: ArgsObj.Header,
      data: params
    }).then((res: any) => {
      resolve(res)
    }).catch((err: any) => { 
      reject(err)
    })
  })
}


function initFetchUserInfoReset(args: {clientID: string, host?: string, accessToken?: string, env?: string}){
  ArgsObj = setArgs(args)
  return fetchUserInfoReset
}

export default initFetchUserInfoReset