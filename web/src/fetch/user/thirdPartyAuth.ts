/*
 * @Author: your name
 * @Date: 2020-05-18 19:24:50
 * @LastEditTime: 2020-05-18 19:25:08
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/web/src/fetch/user/thirdPartyAuth.ts
 */ 

import { getBaaSF } from '../../utils/utils'


//
function fetchThirdPartyAuth(){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject)=>{
    BaaS_F.auth.thirdPartyAuth().then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchThirdPartyAuth(){
  return fetchThirdPartyAuth
}

export default initFetchThirdPartyAuth