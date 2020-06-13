/*
 * @Author: your name
 * @Date: 2020-01-23 18:25:40
 * @LastEditTime: 2020-06-06 08:53:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /minapp-fetch/src/fetch/content/getContent.ts
 */

import { getBaaSF } from './utils/utils'


function fetchGetContent(contentGroupID: number, richTextID: number, params: {
  select?: string[] | undefined
  expand?: string[] | undefined
} = {}){
  let BaaS_F = getBaaSF()

  return new Promise((resolve, reject)=>{
    let MyContentGroup = new BaaS_F.ContentGroup(contentGroupID)
    MyContentGroup.select(params.select || []).expand(params.expand || []).getContent(richTextID).then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // err
      reject(err)
    })
  })
}

export default fetchGetContent