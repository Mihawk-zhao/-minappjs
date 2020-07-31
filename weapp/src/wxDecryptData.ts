
import { getBaaSF } from './utils/utils'


type WxDecryptType = 'we-run-data' | 'phone-number' | 'open-gid'

function fetchWxDecryptData(encryptedData: string, iv: string, type: WxDecryptType){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject)=>{
    BaaS_F.wxDecryptData(encryptedData, iv, type).then((decrytedData: any) =>  {
      resolve(decrytedData)
    }, (err: any) => {
      reject(err)
    })
  })
  
}


export default fetchWxDecryptData