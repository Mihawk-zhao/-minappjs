/*
 * @Author: your name
 * @Date: 2020-04-16 19:18:29
 * @LastEditTime: 2020-04-16 20:00:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /minapp-fetch/src/fetch/content/updateContent.ts
 */

import { setArgs, getBaaSF, cloneDeep, isArray } from '../../utils/utils'
import { PLATFORM_NAME_BAAS, PLATFORM_NAME, UPDATE_METHORD } from '../../constants/constants'
import { UPDATE_ERROR, PLATFORM_ERROR, METHOD_NOT_SUPPORT } from '../../constants/error'

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


type dataType = string | string[] | number | number[] | boolean | boolean[] | null | undefined | {
  [propName: string] : any
} | {
  [index: number]: any
}


type upMethodList = 'incr' | 'set' | 'unset' | 'patchObject' | 'geo' | 'append' | 'remove' | 'uAppend'


function fetchUpdateContent(contentGroupID: number, richTextID: number, params: {
  [propName: string]: [upMethodList, dataType] | dataType
}){
  let BaaS_F = getBaaSF(ArgsObj)
  if(!ArgsObj.Platform){
    throw new Error(PLATFORM_ERROR)
  }
  //webapi
  if(ArgsObj.Platform === PLATFORM_NAME.WEBAPI){
    throw new Error(`minapp.updateCategory ${METHOD_NOT_SUPPORT}`)
  }
}


function initFetchUpdateContent(args: ['webapi', {clientID?: string, host?: string, accessToken?: string, env?: string}]){
  ArgsObj = setArgs(args)
  return fetchUpdateContent
}

export default initFetchUpdateContent