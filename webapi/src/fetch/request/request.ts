/*
 * @Author: your name
 * @Date: 2020-05-18 19:46:11
 * @LastEditTime: 2020-05-27 15:36:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@minappjs/webapi/src/fetch/request/request.ts
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

function fetchRequest(params: {
  url: string
  method: 'get' | 'delete' | 'head' | 'post' | 'put' | 'patch' | 'options' | 'trace' | 'connect'
  baseURL?: string
  transformRequest?: any
  transformResponse?: any
  headers?: {
    [propName: string]: any
  }
  params?: any
  paramsSerializer?: any
  data?: any
  timeout?: number
  withCredentials?: boolean
  adapter?: any 
  auth?: any
  responseType?: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream'
  xsrfCookieName?: string
  xsrfHeaderName?: string
  onUploadProgress?: any
  onDownloadProgress?: any
  maxContentLength?: number
  validateStatus?: any
  maxRedirects?: number
  httpAgent?: any
  httpsAgent?: any
  proxy?: any
  cancelToken?: any
  dataType?: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream'
}){
  let BaaS_F = getBaaSF()

  //webapi
  return new Promise((resolve, reject)=>{
    BaaS_F(params).then((res: any) => {
      resolve(res)
    }, (err: any) => {
      reject(err)
    })
  })
}


function initFetchRequest(args: {clientID: string, host?: string, accessToken?: string, env?: string}){
  ArgsObj = setArgs(args)
  return fetchRequest
}

export default initFetchRequest