/*
 * @Author: your name
 * @Date: 2020-05-18 16:39:44
 * @LastEditTime: 2020-05-18 17:20:56
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/op/src/fetch/file/upload.ts
 */ 

import { getBaaSF } from '../../utils/utils'

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

  //op 运营后台
  let params: any = {
    fileObj: data[0].fileObj,
    filename: data[1].fileName,
    categoryID:  data[1].categoryID,
  }
  return new Promise((resolve, reject)=>{
    BaaS_F.post('https://cloud.minapp.com/userve/v2.1/upload/', {
      filename: params.filename,
      category_id: params.categoryID
    }).then((res: any) => {
      let temp = res.data
      let formData = new FormData()
      formData.append('file', params.fileObj)
      formData.append('policy', temp.policy)
      formData.append('authorization', temp.authorization)
      let axiosUp = require('axios')
      axiosUp.post(temp.upload_url, formData, {
        'headers': {'Content-Type': 'multipart/form-data'},
      }).then((res: any)=>{
        res.data.path = temp.path
        res.data.id = temp.id
        resolve(res)
      }).catch((err: any) => {
        reject(err)
      })
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchUpload(){
  return fetchUpload
}

export default initFetchUpload