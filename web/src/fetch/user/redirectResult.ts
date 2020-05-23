/*
 * @Author: your name
 * @Date: 2020-05-18 19:24:03
 * @LastEditTime: 2020-05-18 19:24:33
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/web/src/fetch/user/redirectResult.ts
 */ 

import { getBaaSF } from '../../utils/utils'


//
function fetchRedirectResult(){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject)=>{
    BaaS_F.auth.getRedirectResult().then((user: any) => {
      resolve(user)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchRedirectResult(){
  return fetchRedirectResult
}

export default initFetchRedirectResult