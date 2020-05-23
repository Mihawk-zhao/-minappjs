/*
 * @Author: your name
 * @Date: 2020-05-18 16:39:44
 * @LastEditTime: 2020-05-18 17:36:48
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/op/src/fetch/userGroup/addUserIntoGroup.ts
 */ 

import { getBaaSF } from '../../utils/utils'

//
function fetchAddUserIntoGroup(users: number[], groups: number[]){
  let BaaS_F = getBaaSF()
  
  //op 运营后台
  return new Promise((resolve, reject) => {
    BaaS_F.patch('https://cloud.minapp.com/userve/v1/miniapp/group/membership/',
    [{
      op: 'add',
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


function initFetchAddUserIntoGroup(){
  return fetchAddUserIntoGroup
}

export default initFetchAddUserIntoGroup