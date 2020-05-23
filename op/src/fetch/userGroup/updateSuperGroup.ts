/*
 * @Author: your name
 * @Date: 2020-05-18 16:39:44
 * @LastEditTime: 2020-05-18 17:44:43
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/op/src/fetch/userGroup/updateSuperGroup.ts
 */ 

import { getBaaSF } from '../../utils/utils'

//
function fetchUpdateSuperGroup(superGroupID: number, params: {
  name?: string
  children?: number[]
} = {}){
  let BaaS_F = getBaaSF()
  
  //op 运营后台
  return new Promise((resolve, reject) => {
    BaaS_F.put(`https://cloud.minapp.com/userve/v1/user-supergroup/${superGroupID}/`, params).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchUpdateSuperGroup(){
  return fetchUpdateSuperGroup
}

export default initFetchUpdateSuperGroup