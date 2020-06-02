/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:11
 * @LastEditTime: 2020-06-02 09:24:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/cloud/src/fetch/file/getFile.ts
 */ 

import { getBaaSF } from './utils/utils'

//
function fetchGetFile(fileID: string){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject)=>{
    let MyFile = new BaaS_F.File()
    MyFile.get(fileID).then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // HError 对象
      reject(err)
    })
  })
  
}


function initFetchGetFile(){
  return fetchGetFile
}

export default initFetchGetFile