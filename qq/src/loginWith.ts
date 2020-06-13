/*
 * @Author: your name
 * @Date: 2020-01-27 13:18:41
 * @LastEditTime: 2020-06-06 09:21:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /minapp-fetch/src/fetch/user/loginWith.ts
 */

import { getBaaSF } from './utils/utils'

//
function fetchLoginWith(...data: [
  any,
  {
    createUser?: boolean
    syncUserProfile?: 'overwrite' | 'setnx' | 'false',
    withUnionID?: boolean
  }
]){
  let BaaS_F = getBaaSF()
  return new Promise((resolve, reject)=>{
    BaaS_F.auth.loginWithQQ(...data).then((user: any) => {
      // 登录成功
      resolve(user)
    }, (err: any) => {
      // 登录失败
      reject(err)
    })
  })
}

export default fetchLoginWith