/*
 * @Author: your name
 * @Date: 2020-05-18 16:39:44
 * @LastEditTime: 2020-05-18 17:18:46
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/op/src/fetch/file/deleteFile.ts
 */ 

import { getBaaSF } from '../../utils/utils'

//
function fetchDeleteFile(fileIDs: string | string[]){
  let BaaS_F = getBaaSF()

  //op 运营后台
  return new Promise((resolve, reject) => {
    if(Array.isArray(fileIDs)){
      BaaS_F.delete('https://cloud.minapp.com/userve/v2.2/file/', {
        params: {
          id__in: (fileIDs || []).toString(),
        }
      }).then((res: any) => {
        resolve(res)
      }).catch((err: any) => {
        reject(err)
      })
    }else{
      BaaS_F.delete(`https://cloud.minapp.com/userve/v2.2file/${fileIDs}/`)
      .then((res: any) => {
        resolve(res)
      }).catch((err: any) => {
        reject(err)
      })
    }
  })
}


function initFetchDeleteFile(){
  return fetchDeleteFile
}

export default initFetchDeleteFile