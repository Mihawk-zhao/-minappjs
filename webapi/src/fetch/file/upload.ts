/*
 * @Author: your name
 * @Date: 2020-05-18 19:46:11
 * @LastEditTime: 2020-05-27 15:33:24
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@minappjs/webapi/src/fetch/file/upload.ts
 */ 

import { setArgs, getBaaSF } from '../../utils/utils'

let ArgsObj: {
  RequestBase?: string | undefined
  Header?: {
    'Content-Type'?: string
    'X-Hydrogen-Client-ID'?: string,
    'Authorization'?: string,
    'X-Hydrogen-Env-ID'?: string,
  }
}

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
  //webapi
  let fileParams: any = {
    fileObj: data[0].fileObj
  }
  let metaData: any = {
    filename: data[1].fileName,
    category_id: data[1].categoryID,
    category_name: data[1].categoryName,
  }
  return new Promise((resolve, reject) => {
    BaaS_F({
      method: 'post',
      url: `${ArgsObj.RequestBase}/hserve/v2.1/upload/`,
      headers: ArgsObj.Header,
      data: metaData
    }).then((res: any) => {
      let tempA = res.data
      let formdata = new FormData()
      formdata.append('file', fileParams.fileObj)
      BaaS_F({
        method: 'post',
        url: tempA.upload_url,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: {
          authorization: tempA.authorization,
          file: formdata,
          policy: tempA.policy
        }
      }).then((res2: any) => {
        let result = {
          data: {
            category: {
              id: metaData.category_id,
              name: metaData.category_name
            },
            created_at: res2.data.time,
            id: tempA.id,
            mime_type: res2.data.mimetype,
            name: tempA.name,
            path: tempA.path,
            size: res2.data.file_size
          }
        }
        resolve(result)
      }).catch((err: any) => {
        reject(err)
      })
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchUpload(args: {clientID: string, host?: string, accessToken?: string, env?: string}){
  ArgsObj = setArgs(args)
  return fetchUpload
}

export default initFetchUpload