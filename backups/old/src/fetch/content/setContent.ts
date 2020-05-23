/*
 * @Author: your name
 * @Date: 2020-04-16 19:16:57
 * @LastEditTime: 2020-04-16 19:36:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /minapp-fetch/src/fetch/content/setContent.ts
 */

import { setArgs, getBaaSF } from '../../utils/utils'
import { PLATFORM_NAME_BAAS, PLATFORM_NAME } from '../../constants/constants'
import { PLATFORM_ERROR, METHOD_NOT_SUPPORT } from '../../constants/error'

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

function fetchSetContent(contentGroupID: number, params: {
  title?: string
  content?: string
  cover?: any
  description?: string
  categories?: number[]
  [propName: string]: any
} = {}){
  let BaaS_F = getBaaSF(ArgsObj)

  if(!ArgsObj.Platform){
    throw new Error(PLATFORM_ERROR)
  }

  if(PLATFORM_NAME_BAAS.indexOf(ArgsObj.Platform) > -1){
    if(ArgsObj.Platform === PLATFORM_NAME.CLOUD){
      return new Promise((resolve: any, reject: any)=>{
        let MyContent = new BaaS_F.Content(contentGroupID)
        let content = MyContent.create()
        content.set(params).save().then((res: any) => {
          // success
          resolve(res)
        }, (err: any) => {
          // err
          reject(err)
        })
      })
    }
    throw new Error(`minapp.setContent ${METHOD_NOT_SUPPORT}`)
  }

  //webapi
  if(ArgsObj.Platform === PLATFORM_NAME.WEBAPI){
    throw new Error(`minapp.setContent ${METHOD_NOT_SUPPORT}`)
  }

  //op 运营后台
  if(ArgsObj.Platform === PLATFORM_NAME.OP){
    return new Promise((resolve, reject)=>{
      BaaS_F.post(`https://cloud.minapp.com/userve/v2.2/content/${contentGroupID}/text/`, params).then((res: any) => {
        resolve(res)
      }).catch((err: any) => {
        reject(err)
      })
    })
  }
  
}


function initFetchSetContent(){
  ArgsObj = setArgs(args)
  return fetchSetContent
}

export default initFetchSetContent