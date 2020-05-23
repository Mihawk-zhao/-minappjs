/*
 * @Author: your name
 * @Date: 2020-05-18 16:39:44
 * @LastEditTime: 2020-05-18 17:40:54
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/op/src/fetch/userGroup/getSuperGroup.ts
 */ 

import { getBaaSF } from '../../utils/utils'

//
function fetchGetSuperGroup(superGroupID: number){
  let BaaS_F = getBaaSF()

  //op 运营后台
  return new Promise((resolve, reject) => {
    BaaS_F.get(`https://cloud.minapp.com/userve/v1/user-supergroup/${superGroupID}/`).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchGetSuperGroup(){
  return fetchGetSuperGroup
}

export default initFetchGetSuperGroup