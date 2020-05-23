
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
function fetchAnonymous(){
  let BaaS_F = getBaaSF(ArgsObj)
  if(!ArgsObj.Platform){
    throw new Error(PLATFORM_ERROR)
  }
  if(PLATFORM_NAME_BAAS.indexOf(ArgsObj.Platform) > -1){
    return new Promise((resolve, reject)=>{
      BaaS_F.auth.anonymousLogin().then((user: any) => {
        resolve(user)
      }).catch((err: any) => {
        // HError
        reject(err)
      })
    })
  }

  //webapi
  if(ArgsObj.Platform === PLATFORM_NAME.WEBAPI){
    throw new Error(`minapp.anonymous ${METHOD_NOT_SUPPORT}`)
  }

  //op 运营后台
  if(ArgsObj.Platform === PLATFORM_NAME.OP){
    throw new Error(`minapp.anonymous ${METHOD_NOT_SUPPORT}`)
  }
  
}


function initFetchAnonymous(){
  ArgsObj = setArgs(args)
  return fetchAnonymous
}

export default initFetchAnonymous