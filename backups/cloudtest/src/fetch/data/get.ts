
import { getBaaSF } from '../../utils/utils'



function fetchGet(table: string | number, id: string, params: {
  select?: string[]
  expand?: string[]
} = {}){
  let BaaS_F = getBaaSF()
  return new Promise((resolve, reject)=>{
    let Product = new BaaS_F.TableObject(table)
    Product.select(params.select || []).expand(params.expand || []).get(id).then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // err
      reject(err)
    })
  })
}


function initFetchGet(){
  return fetchGet
}

export default initFetchGet