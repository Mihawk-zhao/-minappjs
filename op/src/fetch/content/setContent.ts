/*
 * @Author: your name
 * @Date: 2020-04-16 19:16:57
 * @LastEditTime: 2020-05-18 16:52:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /minapp-fetch/src/fetch/content/setContent.ts
 */

import { getBaaSF } from '../../utils/utils'

function fetchSetContent(contentGroupID: number, params: {
  title?: string
  content?: string
  cover?: any
  description?: string
  categories?: number[]
  [propName: string]: any
} = {}){
  let BaaS_F = getBaaSF()


  //op 运营后台
  return new Promise((resolve, reject)=>{
    BaaS_F.post(`https://cloud.minapp.com/userve/v2.2/content/${contentGroupID}/text/`, params).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchSetContent(){
  return fetchSetContent
}

export default initFetchSetContent