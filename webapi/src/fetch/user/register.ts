/*
 * @Author: your name
 * @Date: 2020-05-18 19:46:11
 * @LastEditTime: 2020-05-27 15:39:14
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@minappjs/webapi/src/fetch/user/register.ts
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
function fetchRegister(params: {
  email?: string
  username?: string
  phone?: string
  password: string
}){
  let BaaS_F = getBaaSF()

  //webapi
  return new Promise((resolve, reject)=>{
    let addr = null
    if(params.email){
      addr = 'email'
    }
    if(params.username){
      addr = 'username'
    }
    if(params.phone){
      addr = 'phone'
    }
    BaaS_F({
      method: 'post',
      url: `${ArgsObj.RequestBase}/hserve/v2.1/register/${addr}/`,
      headers: ArgsObj.Header,
      data: params
    }).then((user: any) => {
      resolve(user)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchRegister(args: {clientID: string, host?: string, accessToken?: string, env?: string}){
  ArgsObj = setArgs(args)
  return fetchRegister
}

export default initFetchRegister