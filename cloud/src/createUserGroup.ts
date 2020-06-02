/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:12
 * @LastEditTime: 2020-06-02 11:24:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/cloud/src/fetch/userGroup/createUserGroup.ts
 */ 

import { getBaaSF } from './utils/utils'



//
function fetchCreateUserGroup(params: {
  name: string
  parent: string
}){
  let BaaS_F = getBaaSF()
  return new Promise((resolve, reject) => {
    let userGroup = new BaaS_F.UserGroup()
    userGroup.create(params).then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // err
      reject(err)
    })
  })
}

export default fetchCreateUserGroup