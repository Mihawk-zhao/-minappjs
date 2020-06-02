/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:12
 * @LastEditTime: 2020-06-02 11:29:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/cloud/src/fetch/userGroup/getUserGroup.ts
 */ 

import { getBaaSF } from './utils/utils'


//
function fetchGetUserGroup(groupID: number[]){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject) => {
    let userGroup = new BaaS_F.UserGroup()
    userGroup.get(groupID).then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // err
      reject(err)
    })
  })
}


export default fetchGetUserGroup