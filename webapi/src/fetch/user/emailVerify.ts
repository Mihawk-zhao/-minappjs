
import { setArgs, getBaaSF } from '../../utils/utils'
import { PLATFORM_NAME_BAAS, PLATFORM_NAME } from '../../constants/constants'
import { METHOD_NOT_SUPPORT, PLATFORM_ERROR } from '../../constants/error'

let ArgsObj: {
  Platform?: string | undefined
  RequestBase?: string | undefined
  Header?: {
    'Content-Type'?: string
    'X-Hydrogen-Client-ID'?: string,
    'Authorization'?: string,
    'X-Hydrogen-Env-ID'?: string,
  }
}

//
function fetchEmailVerify(){
  let BaaS_F = getBaaSF(ArgsObj)
  if(!ArgsObj.Platform){
    throw new Error(PLATFORM_ERROR)
  }
  //webapi
  if(ArgsObj.Platform === PLATFORM_NAME.WEBAPI){
    return new Promise((resolve, reject)=>{
      BaaS_F({
        method: 'post',
        url: `${ArgsObj.RequestBase}/hserve/v2.0/user/email-verify/`,
        headers: ArgsObj.Header
      }).then((res: any) => {
        resolve(res)
      }).catch((err: any) => {
        reject(err)
      })
    })
  }
}


function initFetchEmailVerify(args: ['webapi', {clientID?: string, host?: string, accessToken?: string, env?: string}]){
  ArgsObj = setArgs(args)
  return fetchEmailVerify
}

export default initFetchEmailVerify