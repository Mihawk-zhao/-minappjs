/*
 * @Author: your name
 * @Date: 2020-05-18 19:01:03
 * @LastEditTime: 2020-06-06 09:33:20
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@minappjs/tt/src/constants/constants.ts
 */ 

export const PLATFORM_NAME = {
  ALIPAY: 'alipay',
  CLOUD: 'cloud',           //云函数
  OP: 'op',                 //运营后台
  QQ: 'qq',                 
  SWAN: 'swan',             
  WEAPP: 'weapp',
  TT: 'tt',
  WEB: 'web',
  WEBAPI: 'webapi',
}


//更新数据的方法
export const UPDATE_METHORD = [
  'incr',
  'set',
  'geo',
  'unset',
  'append',
  'remove',
  'uAppend',
  'patchObject',
]

