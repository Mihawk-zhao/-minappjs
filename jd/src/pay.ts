/*
 * @Author: your name
 * @Date: 2020-01-26 16:53:50
 * @LastEditTime: 2020-06-06 08:56:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /minapp-fetch/src/fetch/pay/pay.ts
 */

import { getBaaSF } from './utils/utils'

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

  return new Promise((resolve, reject)=>{
    BaaS_F.pay(params).then((res: any) => {
      // success. 支付请求成功响应，可以在 res 中拿到 transaction_no 和支付结果信息
      resolve(res)
    }, (err: any) => {
      // HError 对象
      reject(err)
    })
  })
}


export default fetchPay