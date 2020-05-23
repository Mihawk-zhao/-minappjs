/*
 * @Author: your name
 * @Date: 2020-05-18 19:46:11
 * @LastEditTime: 2020-05-18 19:47:25
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/webapi/src/fetch/content/countContent.ts
 */ 
import fetchFindContent from './findContent'


type methodList = '=' | '!=' | '<' | '<=' | '>' | '>=' |
'in' | 'notIn' | 'arrayContains' |
'contains' | 'matches' | 'stringLength' |
'hasKey' |
'isNull' | 'isExists' |
'include' | 'withinCircle' | 'withinRegion' | 'within'



function initFetchCountContent(args: ['webapi', {clientID?: string, host?: string, accessToken?: string, env?: string}]){

  function fetchCountContent(contentGroupID: number, params: {
    p0?: [string, methodList, ...any[]]
    p1?: [string, methodList, ...any[]]
    p2?: [string, methodList, ...any[]]
    p3?: [string, methodList, ...any[]]
    p4?: [string, methodList, ...any[]]
    p5?: [string, methodList, ...any[]]
    p6?: [string, methodList, ...any[]]
    p7?: [string, methodList, ...any[]]
    p8?: [string, methodList, ...any[]]
    p9?: [string, methodList, ...any[]]
    r: string
    [propName: string]: [string, methodList, ...any[]] | string | number | boolean | string[] | undefined
  }){
    return new Promise((resolve, reject)=>{
      params.limit = 1
      params.withCount = true
      fetchFindContent(args)(contentGroupID, params).then((res: any) => {
        let num = res.data.meta.total_count
        resolve(num)
      }, (err: any) => {
        reject(err)
      })
    })
  }
  
  return fetchCountContent
}

export default initFetchCountContent