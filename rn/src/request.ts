/*
 * @Author: your name
 * @Date: 2020-05-18 18:02:23
 * @LastEditTime: 2020-06-03 19:39:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/weapp/src/fetch/request/request.ts
 */ 

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
  const axios = require('axios')
  return new Promise((resolve, reject)=>{
    axios(params).then((res: any) => {
      resolve(res)
    }, (err: any) => {
      reject(err)
    })
  })
  
}

export default fetchRequest