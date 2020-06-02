/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:12
 * @LastEditTime: 2020-05-18 15:26:42
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/cloud/src/fetch/userGroup/getSuperGroup.ts
 */ 

import { getBaaSF } from './utils/utils'

//
function fetchGetSuperGroup(superGroupID: number){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject) => {
    let userSuperGroup = new BaaS_F.UserSuperGroup()
    userSuperGroup.get(superGroupID).then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // err
      reject(err)
    })
  })
}


function initFetchGetSuperGroup(){
  return fetchGetSuperGroup
}

export default initFetchGetSuperGroup