/*
 * @Author: your name
 * @Date: 2020-05-18 19:46:11
 * @LastEditTime: 2020-05-27 15:19:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@minappjs/webapi/src/fetch/content/findContentGroup.ts
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

function fetchFindContentGroup(params:{
  page?: number
  limit?: number
  withCount?: boolean
} = {}){
  let BaaS_F = getBaaSF()

  //webapi
  return new Promise((resolve, reject)=>{
    BaaS_F({
      method: 'get',
      url: `${ArgsObj.RequestBase}/hserve/v2.2/content/group/`,
      headers: ArgsObj.Header,
      params: {
        limit: params.limit || 20,
        offset: (params.limit || 20) * ((params.page || 1) - 1),
        return_total_count: params.withCount ? 1 : 0,
      },
    }).then((res: any) => {
      resolve(res)
    }).catch((err: any)=>{
      reject(err)
    })
  })
}


function initFetchFindContentGroup(args: {clientID: string, host?: string, accessToken?: string, env?: string}){
  ArgsObj = setArgs(args)
  return fetchFindContentGroup
}

export default initFetchFindContentGroup