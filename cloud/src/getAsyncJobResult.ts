/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:11
 * @LastEditTime: 2020-06-02 11:28:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@minappjs/cloud/src/getAsyncJobResult.ts
 */ 

import { getBaaSF } from './utils/utils'


/**
 * 获取服务器时间
 * ISO 8601: 2019-11-25T15:05:19.387067+08:00
 */
function fetchGetAsyncJobResult(operationID: number){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject) => {
    BaaS_F.getAsyncJobResult(operationID).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


export default fetchGetAsyncJobResult