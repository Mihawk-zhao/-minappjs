
import { getBaaSF, changeSetManyParams } from '../../utils/utils'


type dataType = string | string[] | number | number[] | boolean | boolean[] | null | undefined | {
  [propName: string] : any
} | {
  [index: number]: any
}

function fetchSetOneMany(table: string | number, params: {
  [index: number]: {
    [propName: string]: ['geo', ...any[]] | dataType
  }
}, isTrigger: boolean){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject)=>{
    BaaS_F.post(`https://cloud.minapp.com/userve/v2.4/table/${table}/record/`, changeSetManyParams(params)).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchSetOneMany(){
  return fetchSetOneMany
}

export default initFetchSetOneMany