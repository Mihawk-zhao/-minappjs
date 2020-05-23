
import { getBaaSF } from '../../utils/utils'


function fetchSendSmsCode(phone: string, signatureID: number, userID?: number){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject)=>{
    BaaS_F.sendSmsCode({
      phone: phone,
      signatureID: signatureID,
      userID: userID,
    }).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchSendSmsCode(){
  return fetchSendSmsCode
}

export default initFetchSendSmsCode