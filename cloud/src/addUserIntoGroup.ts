/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:12
 * @LastEditTime: 2020-06-02 09:22:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/cloud/src/fetch/userGroup/addUserIntoGroup.ts
 */ 

import { getBaaSF } from './utils/utils'

//
function fetchAddUserIntoGroup(users: number[], groups: number[]){
  let BaaS_F = getBaaSF()
  return new Promise((resolve, reject) => {
    let userGroup = new BaaS_F.UserGroup()
    userGroup.addUserIntoGroup(users, groups).then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // err
      reject(err)
    })
  })
}


function initFetchAddUserIntoGroup(){
  return fetchAddUserIntoGroup
}

export default initFetchAddUserIntoGroup