/*
 * @Author: your name
 * @Date: 2020-05-18 18:02:23
 * @LastEditTime: 2020-06-06 08:58:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/weapp/src/fetch/file/upload.ts
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

  let [fileParams, metaData] = data
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


export default fetchUpload