/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:12
 * @LastEditTime: 2020-06-02 11:29:31
 * @LastEditors: Please set LastEditors
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


export default fetchGetSuperGroupList