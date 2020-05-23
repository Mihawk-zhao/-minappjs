/*
 * @Author: your name
 * @Date: 2020-05-18 16:39:44
 * @LastEditTime: 2020-05-18 17:39:32
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/op/src/fetch/userGroup/deleteUserGroup.ts
 */ 

import { getBaaSF } from '../../utils/utils'

//
function fetchDeleteUserGroup(groupIDList: number[]){
  let BaaS_F = getBaaSF()

  
  //op 运营后台
  return new Promise((resolve, reject) => {
    BaaS_F.delete(`https://cloud.minapp.com/userve/v1/user-group/`, {
      params: {
        id__in: groupIDList.toString()
      }
    }).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchDeleteUserGroup(){
  return fetchDeleteUserGroup
}

export default initFetchDeleteUserGroup