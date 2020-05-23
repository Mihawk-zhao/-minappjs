/*
 * @Author: your name
 * @Date: 2020-05-18 16:39:44
 * @LastEditTime: 2020-05-18 17:37:58
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/op/src/fetch/userGroup/createUserGroup.ts
 */ 

import { getBaaSF } from '../../utils/utils'

//
function fetchCreateUserGroup(params: {
  name: string
  parent: string
}){
  let BaaS_F = getBaaSF()

  
  //op 运营后台
  return new Promise((resolve, reject) => {
    BaaS_F.post(`https://cloud.minapp.com/userve/v1/user-group/`, params).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchCreateUserGroup(){
  return fetchCreateUserGroup
}

export default initFetchCreateUserGroup