/*
 * @Author: your name
 * @Date: 2020-05-18 18:02:23
 * @LastEditTime: 2020-06-03 19:30:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/weapp/src/fetch/file/deleteFile.ts
 */ 

import { getBaaSF } from './utils/utils'

//
function fetchDeleteFile(fileIDs: string | string[]){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject) => {
    let MyFile = new BaaS_F.File()
    MyFile.delete(fileIDs).then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // err
      reject(err)
    })
  })
}

export default fetchDeleteFile