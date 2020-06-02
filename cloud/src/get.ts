/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:11
 * @LastEditTime: 2020-06-02 11:27:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/cloud/src/fetch/data/get.ts
 */ 

import { getBaaSF } from './utils/utils'


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

export default fetchGet