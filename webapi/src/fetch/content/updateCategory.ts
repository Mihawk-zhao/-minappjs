/*
 * @Author: your name
 * @Date: 2020-04-16 19:20:44
 * @LastEditTime: 2020-04-16 19:53:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /minapp-fetch/src/fetch/content/updateCategory.ts
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


function fetchUpdateCategory(contentGroupID: number, categoryID: number, params: {
  name: string
  parent?: number
} = {name: ''}){
  let BaaS_F = getBaaSF(ArgsObj)
  if(!ArgsObj.Platform){
    throw new Error(PLATFORM_ERROR)
  }
  //webapi
  if(ArgsObj.Platform === PLATFORM_NAME.WEBAPI){
    throw new Error(`minapp.updateCategory ${METHOD_NOT_SUPPORT}`)
  }
}


function initFetchUpdateCategory(args: ['webapi', {clientID?: string, host?: string, accessToken?: string, env?: string}]){
  ArgsObj = setArgs(args)
  return fetchUpdateCategory
}

export default initFetchUpdateCategory