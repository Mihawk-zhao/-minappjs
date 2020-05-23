/*
 * @Author: your name
 * @Date: 2020-05-18 16:39:44
 * @LastEditTime: 2020-05-18 17:44:13
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/op/src/fetch/userGroup/removeUserFromGroup.ts
 */ 

import { getBaaSF } from '../../utils/utils'

//
function fetchRemoveUserFromGroup(users: number[], groups: number[]){
  let BaaS_F = getBaaSF()

  
  //op 运营后台
  return new Promise((resolve, reject) => {
    BaaS_F.patch('https://cloud.minapp.com/userve/v1/miniapp/group/membership/',
    [{
      op: 'remove',
      path: '/membership',
      users: users,
      groups: groups
    }]).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchRemoveUserFromGroup(){
  return fetchRemoveUserFromGroup
}

export default initFetchRemoveUserFromGroup