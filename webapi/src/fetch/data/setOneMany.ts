/*
 * @Author: your name
 * @Date: 2020-05-18 19:46:11
 * @LastEditTime: 2020-05-27 15:26:37
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@minappjs/webapi/src/fetch/data/setOneMany.ts
 */ 

import { setArgs, getBaaSF, changeSetManyParams } from '../../utils/utils'

let ArgsObj: {
  RequestBase?: string | undefined
  Header?: {
    'Content-Type'?: string
    'X-Hydrogen-Client-ID'?: string,
    'Authorization'?: string,
    'X-Hydrogen-Env-ID'?: string,
  }
}


type dataType = string | string[] | number | number[] | boolean | boolean[] | null | undefined | {
  [propName: string] : any
} | {
  [index: number]: any
}

function fetchSetOneMany(table: string | number, params: {
  [index: number]: {
    [propName: string]: ['geo', ...any[]] | dataType
  }
}, isTrigger: boolean){
  let BaaS_F = getBaaSF()

  //webapi
  return new Promise((resolve, reject)=>{
    BaaS_F({
      method: 'post',
      url: `${ArgsObj.RequestBase}/hserve/v2.2/table/${table}/record/`,
      headers: ArgsObj.Header,
      data: changeSetManyParams(params)
    }).then((res: any) => {
      resolve(res)
    }).catch((err: any)=>{
      reject(err)
    })
  })
}


function initFetchSetOneMany(args: {clientID: string, host?: string, accessToken?: string, env?: string}){
  ArgsObj = setArgs(args)
  return fetchSetOneMany
}

export default initFetchSetOneMany