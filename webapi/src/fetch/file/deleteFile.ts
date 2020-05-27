/*
 * @Author: your name
 * @Date: 2020-05-18 19:46:11
 * @LastEditTime: 2020-05-27 15:29:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@minappjs/webapi/src/fetch/file/deleteFile.ts
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
function fetchDeleteFile(fileIDs: string | string[]){
  let BaaS_F = getBaaSF()

  //webapi
  return new Promise((resolve, reject) => {
    if(Array.isArray(fileIDs)){
      BaaS_F({
        method: 'delete',
        url: `${ArgsObj.RequestBase}/hserve/v2.2/uploaded-file/`,
        headers: ArgsObj.Header,
        data: {
          id__in: (fileIDs || []).toString()
        }
      }).then((res: any) => {
        resolve(res)
      }).catch((err: any) => {
        reject(err)
      })
    }else{
      BaaS_F({
        method: 'delete',
        url: `${ArgsObj.RequestBase}/hserve/v2.2/uploaded-file/${fileIDs}/`,
        headers: ArgsObj.Header
      }).then((res: any) => {
        resolve(res)
      }).catch((err: any) => {
        reject(err)
      })
    }
  })
}


function initFetchDeleteFile(args: {clientID: string, host?: string, accessToken?: string, env?: string}){
  ArgsObj = setArgs(args)
  return fetchDeleteFile
}

export default initFetchDeleteFile