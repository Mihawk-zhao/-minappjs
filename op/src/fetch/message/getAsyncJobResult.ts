
import { getBaaSF } from '../../utils/utils'

/**
 * 获取服务器时间
 * ISO 8601: 2019-11-25T15:05:19.387067+08:00
 */
function fetchGetAsyncJobResult(operationID: number){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject)=>{
    BaaS_F({
      method: 'get',
      url: `https://cloud.minapp.com/userve/v1/bulk-operation/${operationID}/`,
    }).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchGetAsyncJobResult(){
  return fetchGetAsyncJobResult
}

export default initFetchGetAsyncJobResult