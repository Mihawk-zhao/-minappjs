/*
 * @Author: your name
 * @Date: 2020-05-18 16:39:44
 * @LastEditTime: 2020-05-18 17:47:28
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/op/src/fetch/userGroup/updateUserGroup.ts
 */ 

import { getBaaSF } from '../../utils/utils'



function fetchUpdateUserGroup(groupID: number, params: {
  name?: string
} = {}){
  let BaaS_F = getBaaSF()

  //op 运营后台
  return new Promise((resolve, reject) => {
    BaaS_F.put(`https://cloud.minapp.com/userve/v1/user-group/${groupID}/`, params).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchUpdateUserGroup(){
  return fetchUpdateUserGroup
}

export default initFetchUpdateUserGroup