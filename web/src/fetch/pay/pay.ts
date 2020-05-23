/*
 * @Author: your name
 * @Date: 2020-01-26 16:53:50
 * @LastEditTime: 2020-05-18 19:21:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /minapp-fetch/src/fetch/pay/pay.ts
 */

import { getBaaSF } from '../../utils/utils'
import { PLATFORM_NAME } from '../../constants/constants'
import { PAY_WAY_ERROR } from '../../constants/error'

//
function fetchPay(way: 'alipay' | 'weapp' | 'qq' | 'swan' | 'tt', params: {
  gatewayType?: 'weixin_tenpay_wap' | 'weixin_tenpay_native' | 'weixin_tenpay_js' | 'alipay_page' | 'alipay_wap' | 'qpay_native'
  totalCost: number
  merchandiseDescription: string
  service?: string
  merchandiseSchemaID?: number
  merchandiseRecordID?: string
  merchandiseSnapshot?: any
  profitSharing?: boolean
}){
  let BaaS_F = getBaaSF()

  let platform = ''
  switch(way){
    case PLATFORM_NAME.ALIPAY:
      platform = 'payWithAlipay'
      break
    case PLATFORM_NAME.WEAPP:
      platform = 'payWithWechat'
      break
    case PLATFORM_NAME.QQ:
      platform = 'payWithQQ'
      break
    default:
      throw new Error(PAY_WAY_ERROR)
  }
  return new Promise((resolve, reject)=>{
    BaaS_F.payment[platform](params).then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // HError 对象
      reject(err)
    })
  })
}


function initFetchPay(){
  return fetchPay
}

export default initFetchPay