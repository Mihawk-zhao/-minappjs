/*
 * @Author: your name
 * @Date: 2020-05-18 18:02:23
 * @LastEditTime: 2020-05-18 18:34:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/weapp/src/fetch/request/request.ts
 */ 

import { getBaaSF } from '../../utils/utils'


function fetchRequest(params: {
  url: string
  method: 'get' | 'delete' | 'head' | 'post' | 'put' | 'patch' | 'options' | 'trace' | 'connect'
  header?: {
    [propName: string]: any
  }
  data?: any
  timeout?: number
  dataType?: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream'
}){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject)=>{
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