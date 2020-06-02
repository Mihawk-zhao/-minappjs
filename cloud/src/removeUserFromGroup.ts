/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:12
 * @LastEditTime: 2020-06-02 11:30:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/cloud/src/fetch/userGroup/removeUserFromGroup.ts
 */ 

import { getBaaSF } from './utils/utils'

//
function fetchRemoveUserFromGroup(users: number[], groups: number[]){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject) => {
    let userGroup = new BaaS_F.UserGroup()
    userGroup.removeUserFromGroup(users, groups).then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // err
      reject(err)
    })
  })
}

export default fetchRemoveUserFromGroup