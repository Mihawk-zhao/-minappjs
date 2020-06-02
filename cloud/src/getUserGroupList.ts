/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:12
 * @LastEditTime: 2020-05-18 15:28:55
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/cloud/src/fetch/userGroup/getUserGroupList.ts
 */ 

import { getBaaSF } from './utils/utils'



function fetchGetUserGroupList(parentID: number | boolean, params: {
  limit?: number
  page?: number
} = {}){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject) => {
    let userGroup = new BaaS_F.UserGroup()
    let p = parentID ? { parentID: parentID } : {}
    userGroup.limit(params.limit || 20).offset((params.limit || 20) * ((params.page || 1) - 1)).getUserGroupList(p).then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // err
      reject(err)
    })
  })
}


function initFetchGetUserGroupList(){
  return fetchGetUserGroupList
}

export default initFetchGetUserGroupList