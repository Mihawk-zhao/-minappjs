/*
 * @Author: your name
 * @Date: 2020-05-18 16:39:44
 * @LastEditTime: 2020-05-18 17:39:05
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/op/src/fetch/userGroup/deleteSuperGroup.ts
 */ 

import { getBaaSF } from '../../utils/utils'


//
function fetchDeleteSuperGroup(superGroupIDList: number[]){
  let BaaS_F = getBaaSF()

  
  //op 运营后台
  return new Promise((resolve, reject) => {
    BaaS_F.delete(`https://cloud.minapp.com/userve/v1/user-supergroup/`, {
      params: {
        id__in: superGroupIDList.toString()
      }
    }).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchDeleteSuperGroup(){
  return fetchDeleteSuperGroup
}

export default initFetchDeleteSuperGroup