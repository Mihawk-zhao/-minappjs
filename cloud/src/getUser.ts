/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:12
 * @LastEditTime: 2020-05-18 15:27:59
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/cloud/src/fetch/userGroup/getUser.ts
 */ 

import { getBaaSF } from './utils/utils'


function fetchGetUser(uid: number, params: {
  expand?: string[]
  select?: string[]
} = {}){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject)=>{
    let MyUser = new BaaS_F.User()
    MyUser.expand(params.expand || []).select(params.select || []).get(uid).then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // err
      reject(err)
    })
  })
}


export default fetchGetUser