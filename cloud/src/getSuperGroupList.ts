/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:12
 * @LastEditTime: 2020-05-18 15:27:20
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/cloud/src/fetch/userGroup/getSuperGroupList.ts
 */ 

import { getBaaSF } from './utils/utils'


//
function fetchGetSuperGroupList(params: {
  limit?: number
  page?: number
} = {}){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject) => {
    let userSuperGroup = new BaaS_F.UserSuperGroup()
    userSuperGroup.limit(params.limit || 20).offset((params.limit || 20) * ((params.page || 1) - 1)).getUserSuperGroupList().then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // err
      reject(err)
    })
  })
}


function initFetchGetSuperGroupList(){
  return fetchGetSuperGroupList
}

export default initFetchGetSuperGroupList