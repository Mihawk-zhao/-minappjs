/*
 * @Author: your name
 * @Date: 2020-01-23 18:25:40
 * @LastEditTime: 2020-05-18 16:50:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /minapp-fetch/src/fetch/content/getContent.ts
 */

import { getBaaSF } from '../../utils/utils'

function fetchGetContent(contentGroupID: number, richTextID: number, params: {
  select?: string[] | undefined
  expand?: string[] | undefined
} = {}){
  let BaaS_F = getBaaSF()

  //op 运营后台
  return new Promise((resolve, reject)=>{
    BaaS_F.get(`https://cloud.minapp.com/userve/v2.2/content/${contentGroupID}/text/${richTextID}/`, {
      params: {
        expand: (params.expand || []).toString(),
      }
    }).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchGetContent(){
  return fetchGetContent
}

export default initFetchGetContent