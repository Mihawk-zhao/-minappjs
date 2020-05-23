/*
 * @Author: your name
 * @Date: 2020-04-16 19:18:53
 * @LastEditTime: 2020-05-18 16:46:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /minapp-fetch/src/fetch/content/deleteContent.ts
 */
import { getBaaSF } from '../../utils/utils'

function fetchDeleteContent(contentGroupID: number, richTextID: number){
  let BaaS_F = getBaaSF()

  //op 运营后台
  return new Promise((resolve, reject) => {
    BaaS_F.delete(`https://cloud.minapp.com/userve/v2.2/content/${contentGroupID}/text/${richTextID}/`).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchDeleteContent(){
  return fetchDeleteContent
}

export default initFetchDeleteContent