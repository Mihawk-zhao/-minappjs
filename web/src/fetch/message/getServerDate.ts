/*
 * @Author: your name
 * @Date: 2020-05-18 18:02:23
 * @LastEditTime: 2020-05-18 18:29:08
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/weapp/src/fetch/message/getServerDate.ts
 */ 

import { getBaaSF } from '../../utils/utils'


/**
 * 获取服务器时间
 * ISO 8601: 2019-11-25T15:05:19.387067+08:00
 */
function fetchGetServerDate(){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject) => {
    BaaS_F.getServerDate().then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchGetServerDate(){
  return fetchGetServerDate
}

export default initFetchGetServerDate