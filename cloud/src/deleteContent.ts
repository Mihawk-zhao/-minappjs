/*
 * @Author: your name
 * @Date: 2020-04-16 19:18:53
 * @LastEditTime: 2020-06-02 11:25:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /minapp-fetch/src/fetch/content/deleteContent.ts
 */
import { getBaaSF } from './utils/utils'


function fetchDeleteContent(contentGroupID: number, richTextID: number){
  let BaaS_F = getBaaSF()

  return new Promise((resolve: any, reject: any)=>{
    let MyContent = new BaaS_F.Content(contentGroupID)
    MyContent.delete(richTextID).then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // err
      reject(err)
    })
  })
}

export default fetchDeleteContent