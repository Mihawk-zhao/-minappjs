/*
 * @Author: your name
 * @Date: 2020-05-18 16:39:44
 * @LastEditTime: 2020-05-18 17:43:48
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/op/src/fetch/userGroup/getUserGroupList.ts
 */ 

import { getBaaSF } from '../../utils/utils'


function fetchGetUserGroupList(parentID: number | boolean, params: {
  limit?: number
  page?: number
} = {}){
  let BaaS_F = getBaaSF()

  //op 运营后台
  return new Promise((resolve, reject) => {
    BaaS_F.get(`https://cloud.minapp.com/userve/v1/user-group/`, {
      params: {
        parent_id: parentID ? parentID : '',
        limit: params.limit || 20,
        offset: (params.limit || 20) * ((params.page || 1) - 1),
      }
    }).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchGetUserGroupList(){
  return fetchGetUserGroupList
}

export default initFetchGetUserGroupList