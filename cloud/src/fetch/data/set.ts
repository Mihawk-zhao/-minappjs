
import { getBaaSF, changeSetParams } from '../../utils/utils'


type dataType = string | string[] | number | number[] | boolean | boolean[] | null | undefined | {
  [propName: string] : any
} | {
  [index: number]: any
}


function fetchSet(table: string | number, params: {
  [propName: string]: ['geo', ...any[]] | dataType
}){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject)=>{
    let Product = new BaaS_F.TableObject(table)
    let product = Product.create()
    product.set(changeSetParams(params)).save().then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      //err 为 HError 对象
      reject(err)
    })
  })
}


function initFetchSet(){
  return fetchSet
}

export default initFetchSet