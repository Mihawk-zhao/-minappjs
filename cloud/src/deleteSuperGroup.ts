/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:12
 * @LastEditTime: 2020-06-02 11:26:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/cloud/src/fetch/userGroup/deleteSuperGroup.ts
 */ 

import { getBaaSF } from './utils/utils'


//
function fetchDeleteSuperGroup(superGroupIDList: number[]){
  let BaaS_F = getBaaSF()
  return new Promise((resolve, reject) => {
    let userSuperGroup = new BaaS_F.UserSuperGroup()
    userSuperGroup.delete(superGroupIDList).then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // err
      reject(err)
    })
  })
}


export default fetchDeleteSuperGroup