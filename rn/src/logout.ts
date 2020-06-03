/*
 * @Author: your name
 * @Date: 2020-05-18 18:02:23
 * @LastEditTime: 2020-06-03 19:37:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/weapp/src/fetch/user/logout.ts
 */ 

import { getBaaSF } from './utils/utils'


//
function fetchLogout(){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject)=>{
    // 登出 BaaS
    BaaS_F.auth.logout().then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // err
      reject(err)
    })
  })
}

export default fetchLogout