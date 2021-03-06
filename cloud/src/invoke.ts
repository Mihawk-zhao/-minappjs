/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:11
 * @LastEditTime: 2020-06-02 11:30:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/cloud/src/fetch/invoke/invoke.ts
 */ 

import { getBaaSF } from './utils/utils'


function fetchInvoke(invokeName: string, params: any, sync: boolean){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject)=>{
    BaaS_F.invoke(invokeName, params, sync).then((res: any) => {
      if (res.code === 0) {
        // success
        resolve(res)
      } else {
        // fail
        reject(res)
      }
    }, (err: any) => {
      // HError 对象
      reject(err)
    })
  })
}

export default fetchInvoke