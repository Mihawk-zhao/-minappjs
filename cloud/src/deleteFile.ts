/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:11
 * @LastEditTime: 2020-05-18 14:59:39
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/cloud/src/fetch/file/deleteFile.ts
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


function initFetchDeleteFile(){
  return fetchDeleteFile
}

export default initFetchDeleteFile