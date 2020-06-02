
import { getBaaSF } from './utils/utils'

function fetchSendEmail(params: {
  recipient?: string
  subject?: string
  body?: string
}){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject) => {
    BaaS_F.sendEmail(params).then((res: any) => {
      // 发送成功
      resolve(res)
    }, (err: any) => {
      // 发送失败
      reject(err)
    })
  })
}


function initFetchSendEmail(){
  return fetchSendEmail
}

export default initFetchSendEmail