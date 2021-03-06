/*
 * @Author: your name
 * @Date: 2020-01-23 18:25:40
 * @LastEditTime: 2020-05-27 15:21:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /minapp-fetch/src/fetch/content/getContent.ts
 */

import { setArgs, getBaaSF } from '../../utils/utils'

let ArgsObj: {
  RequestBase?: string | undefined
  Header?: {
    'Content-Type'?: string
    'X-Hydrogen-Client-ID'?: string,
    'Authorization'?: string,
    'X-Hydrogen-Env-ID'?: string,
  }
}

function fetchGetContent(contentGroupID: number, richTextID: number, params: {
  select?: string[] | undefined
  expand?: string[] | undefined
} = {}){
  let BaaS_F = getBaaSF()
  //webapi
  return new Promise((resolve, reject)=>{
    BaaS_F({
      method: 'get',
      url: `${ArgsObj.RequestBase}/hserve/v2.2/content/detail/${richTextID}/`,
      headers: ArgsObj.Header,
      params: {
        content_group_id: contentGroupID,
        expand: (params.expand || []).toString(),
        keys: (params.select || []).toString(),
      }
    }).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchGetContent(args: {clientID: string, host?: string, accessToken?: string, env?: string}){
  ArgsObj = setArgs(args)
  return fetchGetContent
}

export default initFetchGetContent