/*
 * @Author: your name
 * @Date: 2020-01-24 11:03:54
 * @LastEditTime: 2020-06-02 11:33:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /minapp-fetch/src/fetch/data/delete.ts
 */

import { getBaaSF } from './utils/utils'


function fetchDeleteData(table: string | number, id: string){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject)=>{
    let Product = new BaaS_F.TableObject(table)
    Product.delete(id).then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // err
      reject(err)
    })
  })
  
}

export default fetchDeleteData