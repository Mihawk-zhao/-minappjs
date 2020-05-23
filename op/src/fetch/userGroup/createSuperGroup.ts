/*
 * @Author: your name
 * @Date: 2020-05-18 16:39:44
 * @LastEditTime: 2020-05-18 17:37:31
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/op/src/fetch/userGroup/createSuperGroup.ts
 */ 

import { getBaaSF } from '../../utils/utils'


//
function fetchCreateSuperGroup(params: {
  name: string
  children?: number[]
}){
  let BaaS_F = getBaaSF()

  //op 运营后台
  return new Promise((resolve, reject) => {
    BaaS_F.post(`https://cloud.minapp.com/userve/v1/user-supergroup/`, params).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchCreateSuperGroup(){
  return fetchCreateSuperGroup
}

export default initFetchCreateSuperGroup