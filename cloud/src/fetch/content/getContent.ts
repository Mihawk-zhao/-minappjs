/*
 * @Author: your name
 * @Date: 2020-01-23 18:25:40
 * @LastEditTime: 2020-05-18 14:44:04
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

  return new Promise((resolve: any, reject: any)=>{
    let MyContent = new BaaS_F.Content(contentGroupID)
    MyContent.select(params.select || []).expand(params.expand || []).get(richTextID).then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // err
      reject(err)
    })
  })
  
}


function initFetchGetContent(){
  return fetchGetContent
}

export default initFetchGetContent