/*
 * @Author: your name
 * @Date: 2020-05-18 16:39:44
 * @LastEditTime: 2020-05-18 17:43:16
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/op/src/fetch/userGroup/getUserGroup.ts
 */ 

import { getBaaSF } from '../../utils/utils'


//
function fetchGetUserGroup(groupID: number[]){
  let BaaS_F = getBaaSF()
  
  //op 运营后台
  return new Promise((resolve, reject) => {
    BaaS_F.get(`https://cloud.minapp.com/userve/v1/user-group/${groupID}/`).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchGetUserGroup(){
  return fetchGetUserGroup
}

export default initFetchGetUserGroup