/*
 * @Author: your name
 * @Date: 2020-05-18 19:46:11
 * @LastEditTime: 2020-05-27 15:25:25
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@minappjs/webapi/src/fetch/data/get.ts
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

function fetchGet(table: string | number, id: string, params: {
  select?: string[]
  expand?: string[]
} = {}){
  let BaaS_F = getBaaSF()

  //webapi
  return new Promise((resolve, reject)=>{
    BaaS_F({
      method: 'get',
      url: `${ArgsObj.RequestBase}/hserve/v2.2/table/${table}/record/${id}/`,
      headers: ArgsObj.Header,
      params: {
        expand: (params.expand || []).toString(),
        keys: (params.select || []).toString(),
      }
    }).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchGet(args: {clientID: string, host?: string, accessToken?: string, env?: string}){
  ArgsObj = setArgs(args)
  return fetchGet
}

export default initFetchGet