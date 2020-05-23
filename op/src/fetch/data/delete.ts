/*
 * @Author: your name
 * @Date: 2020-01-24 11:03:54
 * @LastEditTime: 2020-05-18 16:54:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /minapp-fetch/src/fetch/data/delete.ts
 */

import { getBaaSF } from '../../utils/utils'


function fetchDelete(table: string | number, id: string){
  let BaaS_F = getBaaSF()

  //op 运营后台
  return new Promise((resolve, reject) => {
    BaaS_F.delete(`https://cloud.minapp.com/userve/v2.4/table/${table}/record/${id}/`).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchDelete(){
  return fetchDelete
}

export default initFetchDelete