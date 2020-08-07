/*
 * @Author: your name
 * @Date: 2020-01-23 18:25:40
 * @LastEditTime: 2020-06-02 11:28:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /minapp-fetch/src/fetch/content/getContent.ts
 */

import { getBaaSF } from './utils/utils'


function fetchGetContent(contentGroupID: number, richTextID: number, params: {
  expand?: string | string[]
  select?: string | string[]
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

export default fetchGetContent