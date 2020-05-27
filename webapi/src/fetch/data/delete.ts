/*
 * @Author: your name
 * @Date: 2020-01-24 11:03:54
 * @LastEditTime: 2020-05-27 15:24:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /minapp-fetch/src/fetch/data/delete.ts
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

function fetchDelete(table: string | number, id: string){
  let BaaS_F = getBaaSF()
  //webapi
  return new Promise((resolve, reject)=>{
    BaaS_F({
      method: 'delete',
      url: `${ArgsObj.RequestBase}/hserve/v2.2/table/${table}/record/${id}/`,
      headers: ArgsObj.Header
    }).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchDelete(args: {clientID: string, host?: string, accessToken?: string, env?: string}){
  ArgsObj = setArgs(args)
  return fetchDelete
}

export default initFetchDelete