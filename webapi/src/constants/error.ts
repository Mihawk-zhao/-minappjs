/*
 * @Author: your name
 * @Date: 2020-05-18 19:46:11
 * @LastEditTime: 2020-05-27 15:11:25
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@minappjs/webapi/src/constants/error.ts
 */ 

export const PLATFORM_ERROR = `平台(Platform)不正确。`
export const CLIENT_ID_ERROR = `未输入clientID。`

export const UPDATE_ERROR = `参数(params)格式不对。`

export const FIND_R_ERROR = `r规则未定义。`
export const FIND_CHECKR_ERROR = `r规则里的括号未对应（成对）。`
export const FIND_P_ERROR = `p参数(p0~p99)错误。`
export const FIND_MANY_L_ERROR = `参数数组(params array)错误。`


export const METHOD_NOT_SUPPORT = `当前平台暂不支持此方法。`

export const PAY_WAY_ERROR = `支付方式(way)必须为 alipay, weapp, qq, swan 中的一种。`
export const PAY_WAY_PLATFORM_ERROR = `支付平台错误。`
