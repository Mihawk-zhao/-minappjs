/*
 * @Author: your name
 * @Date: 2020-05-18 18:02:23
 * @LastEditTime: 2020-05-18 18:27:04
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/weapp/src/fetch/file/getFile.ts
 */ 

import { getBaaSF } from '../../utils/utils'


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