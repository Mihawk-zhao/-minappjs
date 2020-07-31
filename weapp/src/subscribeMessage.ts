
import { getBaaSF } from './utils/utils'

interface ISubMessage {
  template_id: string | number
  subscription_type: 'once' | 'permanent'
}

function fetchSubscribeMessage(subscription: ISubMessage[]){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject)=>{
    BaaS_F.subscribeMessage(subscription).then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      //err 为 HError 对象
      reject(err)
    })
    
  })
  
}


export default fetchSubscribeMessage