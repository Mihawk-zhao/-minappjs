/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:12
 * @LastEditTime: 2020-05-18 15:23:19
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/cloud/src/fetch/userGroup/createSuperGroup.ts
 */ 

import { getBaaSF } from './utils/utils'


//
function fetchCreateSuperGroup(params: {
  name: string
  children?: number[]
}){
  let BaaS_F = getBaaSF()
  return new Promise((resolve, reject) => {
    let userSuperGroup = new BaaS_F.UserSuperGroup()
    userSuperGroup.create(params).then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // err
      reject(err)
    })
  })
}


function initFetchCreateSuperGroup(){
  return fetchCreateSuperGroup
}

export default initFetchCreateSuperGroup