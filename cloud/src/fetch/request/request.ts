/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:11
 * @LastEditTime: 2020-05-18 15:09:57
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/cloud/src/fetch/request/request.ts
 */ 

import { getBaaSF } from '../../utils/utils'


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

  return new Promise((resolve, reject) => {
    BaaS_F.request(params).then((res: any) => {
      resolve(res)
    }, (err: any) => {
      reject(err)
    })
  })
  
}


function initFetchRequest(){
  return fetchRequest
}

export default initFetchRequest