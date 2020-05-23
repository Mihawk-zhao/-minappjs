/*
 * @Author: your name
 * @Date: 2020-05-18 16:39:44
 * @LastEditTime: 2020-05-18 17:42:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/op/src/fetch/userGroup/getUser.ts
 */ 

import { getBaaSF } from '../../utils/utils'

function fetchGetUser(uid: number, params: {
  expand?: string[]
  select?: string[]
} = {}){
  let BaaS_F = getBaaSF()

  //op 运营后台
  return new Promise((resolve, reject) => {
    BaaS_F.get(`https://cloud.minapp.com/userve/v2.2/miniapp/user_profile/${uid}/`)
    .then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchGetUser(){
  return fetchGetUser
}

export default initFetchGetUser