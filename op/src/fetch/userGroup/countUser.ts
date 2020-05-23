/*
 * @Author: your name
 * @Date: 2020-05-18 16:39:44
 * @LastEditTime: 2020-05-18 17:36:54
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/op/src/fetch/userGroup/countUser.ts
 */ 
import fetchFindUser from './findUser'


type methodList = '=' | '!=' | '<' | '<=' | '>' | '>=' |
'in' | 'notIn' | 'arrayContains' |
'contains' | 'matches' | 'stringLength' |
'hasKey' |
'isNull' | 'isExists' |
'include' | 'withinCircle' | 'withinRegion' | 'within'


function initFetchCountUser(){
  function fetchCountUser(params: {
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
    return new Promise((resolve, reject) => {
      params.limit = 1
      params.withCount = true
      fetchFindUser()(params).then((res: any) => {
        let num = res.data.meta.total_count
        resolve(num)
      }, err=>{
        reject(err)
      })
    })
  }
  
  return fetchCountUser
}

export default initFetchCountUser