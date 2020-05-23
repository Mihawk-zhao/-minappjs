/*
 * @Author: your name
 * @Date: 2020-05-18 19:23:10
 * @LastEditTime: 2020-05-18 19:23:39
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/web/src/fetch/user/loginThirdParty.ts
 */ 

import { getBaaSF } from '../../utils/utils'



function fetchLoginThirdParty(provider: 'oauth-wechat-mp' | 'oauth-wechat-web' | 'oauth-weibo', authPageUrl: string, params: {
  debug?: boolean
  mode?: 'popup-window' | 'popup-iframe' | 'redirect'
  authModalStyle?: any
  wechatIframeContentStyle?: any
  windowFeatures?: any
  createUser?: boolean
  syncUserProfile?: 'overwrite' | 'setnx' | 'false'
} = {}){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject)=>{
    BaaS_F.auth.loginWithThirdParty(provider, authPageUrl, params).then((user: any) => {
      resolve(user)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchLoginThirdParty(){
  return fetchLoginThirdParty
}

export default initFetchLoginThirdParty