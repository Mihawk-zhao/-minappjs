/*
 * @Author: your name
 * @Date: 2020-05-18 16:39:44
 * @LastEditTime: 2020-05-18 16:51:20
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/op/src/fetch/content/getContentGroup.ts
 */ 

import { getBaaSF } from '../../utils/utils'

function fetchGetContentGroup(contentGroupID: number){
  let BaaS_F = getBaaSF()

  //op 运营后台
  return new Promise((resolve, reject)=>{
    BaaS_F.get(`https://cloud.minapp.com/userve/v2.2/content/${contentGroupID}/`).then((res: any) => {
      resolve(res)
    }).catch((err: any)=>{
      reject(err)
    })
  })
}


function initFetchGetContentGroup(){
  return fetchGetContentGroup
}

export default initFetchGetContentGroup