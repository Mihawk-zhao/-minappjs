/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:12
 * @LastEditTime: 2020-05-18 15:33:01
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/cloud/src/fetch/userGroup/updateUserGroup.ts
 */ 

import { getBaaSF } from '../../utils/utils'


function fetchUpdateUserGroup(groupID: number, params: {
  name?: string
} = {}){
  let BaaS_F = getBaaSF()
  return new Promise((resolve, reject) => {
    let userGroup = new BaaS_F.UserGroup()
    userGroup.update(groupID, params).then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // err
      reject(err)
    })
  })
}


function initFetchUpdateUserGroup(){
  return fetchUpdateUserGroup
}

export default initFetchUpdateUserGroup