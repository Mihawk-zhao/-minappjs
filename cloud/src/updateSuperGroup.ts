/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:12
 * @LastEditTime: 2020-05-18 15:29:53
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/cloud/src/fetch/userGroup/updateSuperGroup.ts
 */ 

import { getBaaSF } from './utils/utils'


//
function fetchUpdateSuperGroup(superGroupID: number, params: {
  name?: string
  children?: number[]
} = {}){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject) => {
    let userSuperGroup = new BaaS_F.UserSuperGroup()
    userSuperGroup.update(superGroupID, params).then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // err
      reject(err)
    })
  })
}


function initFetchUpdateSuperGroup(){
  return fetchUpdateSuperGroup
}

export default initFetchUpdateSuperGroup