/*
 * @Author: your name
 * @Date: 2020-05-18 18:02:23
 * @LastEditTime: 2020-06-06 08:52:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/weapp/src/fetch/message/getAsyncJobResult.ts
 */ 

import { getBaaSF } from './utils/utils'


/**
 * 获取
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