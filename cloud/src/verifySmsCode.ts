
import { getBaaSF } from './utils/utils'


function fetchVerifySmsCode(phone: string, code: number, userID?: number){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject)=>{
    BaaS_F.verifySmsCode({phone: phone, code: code, userID: userID}).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchVerifySmsCode(){
  return fetchVerifySmsCode
}

export default initFetchVerifySmsCode