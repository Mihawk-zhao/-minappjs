/*
 * @Author: your name
 * @Date: 2020-05-18 16:39:44
 * @LastEditTime: 2020-05-18 17:21:31
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/op/src/fetch/invoke/invoke.ts
 */ 

import { getBaaSF } from '../../utils/utils'


function fetchInvoke(invokeName: string, params: any, sync: boolean){
  let BaaS_F = getBaaSF()

  //op 运营后台
  return new Promise((resolve, reject)=>{
    BaaS_F.post(`https://cloud.minapp.com/userve/v1.3/cloud-function/${invokeName}/job/?sync=${sync}`, params).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchInvoke(){
  return fetchInvoke
}

export default initFetchInvoke