
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
function fetchRegister(params: {
  email?: string
  username?: string
  phone?: string
  password: string
}){
  let BaaS_F = getBaaSF(ArgsObj)
  if(!ArgsObj.Platform){
    throw new Error(PLATFORM_ERROR)
  }

  //webapi
  if(ArgsObj.Platform === PLATFORM_NAME.WEBAPI){
    return new Promise((resolve, reject)=>{
      let addr = null
      if(params.email){
        addr = 'email'
      }
      if(params.username){
        addr = 'username'
      }
      if(params.phone){
        addr = 'phone'
      }
      BaaS_F({
        method: 'post',
        url: `${ArgsObj.RequestBase}/hserve/v2.1/register/${addr}/`,
        headers: ArgsObj.Header,
        data: params
      }).then((user: any) => {
        resolve(user)
      }).catch((err: any) => {
        reject(err)
      })
    })
  }
}


function initFetchRegister(args: ['webapi', {clientID?: string, host?: string, accessToken?: string, env?: string}]){
  ArgsObj = setArgs(args)
  return fetchRegister
}

export default initFetchRegister