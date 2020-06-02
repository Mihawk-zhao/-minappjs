/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:11
 * @LastEditTime: 2020-06-02 09:26:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/cloud/src/fetch/file/upload.ts
 */ 

import { getBaaSF } from './utils/utils'

//
function fetchUpload(...data: [
  {
    filePath?: string,
    fileObj?: string,
    fileType?: string,
  },
  {
    categoryID?: string,
    categoryName?: string,
    fileName?: string,
    filePath?: string,
    contentType?: string,
  }
]){
  let BaaS_F = getBaaSF()
  let fileParams = data[0].fileObj
  let metaData = {
    category_id: data[1].categoryID,
    filename: data[1].fileName,
    filepath: data[1].filePath,
    contentType: data[1].contentType,
  }
  return new Promise((resolve, reject)=>{
    let MyFile = new BaaS_F.File()
    MyFile.upload(fileParams, metaData).then((res: any) => {
      // 上传成功
      resolve(res)
    }, (err: any) => {
      // HError 对象
      reject(err)
    })
  })
}


function initFetchUpload(){
  return fetchUpload
}

export default initFetchUpload