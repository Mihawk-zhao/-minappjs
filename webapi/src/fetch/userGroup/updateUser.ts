import fetchGetUser from './getUser'

import { setArgs, getBaaSF, isArray } from '../../utils/utils'
import { PLATFORM_NAME_BAAS, PLATFORM_NAME, UPDATE_METHORD } from '../../constants/constants'
import { METHOD_NOT_SUPPORT, UPDATE_ERROR, PLATFORM_ERROR } from '../../constants/error'

let ArgsObj: {
  Platform?: string | undefined
  RequestBase?: string | undefined
  Header?: {
    'Content-Type'?: string
    'X-Hydrogen-Client-ID'?: string,
    'Authorization'?: string,
    'X-Hydrogen-Env-ID'?: string,
  }
}, Args: ['webapi', {clientID?: string, host?: string, accessToken?: string, env?: string}]



type dataType = string | string[] | number | number[] | boolean | boolean[] | null | undefined | {
  [propName: string] : any
} | {
  [index: number]: any
}


type upMethodList = 'incr' | 'set' | 'unset' | 'patchObject' | 'append' | 'remove' | 'uAppend'



function fetchUpdateUser(...data: [number, {
  [propName: string]: [upMethodList, dataType] | dataType
}]){
  let BaaS_F = getBaaSF(ArgsObj)
  if(!ArgsObj.Platform){
    throw new Error(PLATFORM_ERROR)
  }

  //webapi
  if(ArgsObj.Platform === PLATFORM_NAME.WEBAPI){
    let [params] = data
    return new Promise((resolve, reject)=>{
      BaaS_F({
        method: 'put',
        url: `${ArgsObj.RequestBase}/hserve/v2.0/user/account/`,
        headers: ArgsObj.Header,
        data: params
      }).then((res: any) => {
        resolve(res)
      }).catch((err: any) => { 
        reject(err)
      })
    })
  }
  
}


function initFetchUpdateUser(args: ['webapi', {clientID?: string, host?: string, accessToken?: string, env?: string}]){
  Args = args
  ArgsObj = setArgs(args)
  return fetchUpdateUser
}

export default initFetchUpdateUser