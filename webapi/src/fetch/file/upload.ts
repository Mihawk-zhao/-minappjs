
import { setArgs, getBaaSF } from '../../utils/utils'
import { PLATFORM_NAME_BAAS, PLATFORM_NAME } from '../../constants/constants'
import { METHOD_NOT_SUPPORT, PLATFORM_ERROR } from '../../constants/error'

let ArgsObj: {
  Platform?: string | undefined
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
  let BaaS_F = getBaaSF(ArgsObj)
  if(!ArgsObj.Platform){
    throw new Error(PLATFORM_ERROR)
  }
  //webapi
  if(ArgsObj.Platform === PLATFORM_NAME.WEBAPI){
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
}


function initFetchUpload(args: ['webapi', {clientID?: string, host?: string, accessToken?: string, env?: string}]){
  ArgsObj = setArgs(args)
  return fetchUpload
}

export default initFetchUpload