/*
 * @Author: your name
 * @Date: 2020-05-18 18:02:23
 * @LastEditTime: 2020-06-03 19:33:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/weapp/src/fetch/data/findMany.ts
 */ 

import fetchFind from './find'
import { FIND_MANY_L_ERROR } from './constants/error'
const pLimit = require('p-limit')


type methodList = '=' | '!=' | '<' | '<=' | '>' | '>=' |
'in' | 'notIn' | 'arrayContains' |
'contains' | 'matches' | 'stringLength' |
'hasKey' |
'isNull' | 'isExists' |
'include' | 'withinCircle' | 'withinRegion' | 'within'





function fetchFindMany(findArray: {
  [index: number]: [string | number, {
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
    page?: number
    limit?: number
    orderBy?: string
    expand?: string[]
    select?: string[]
    withCount?: false | boolean
    [propName: string]: [string, methodList, ...any[]] | string | number | boolean | string[] | undefined
  }]
}, plimit: number = 10){
  return new Promise((resolve, reject)=>{
    let limit = pLimit(plimit)
    let input = []
    if(findArray.length === 0){
      throw new Error(FIND_MANY_L_ERROR)
    }
    for(let i = 0; i < findArray.length; i++){
      input.push(limit(() => fetchFind(findArray[i][0], findArray[i][1])))
    }
    Promise.all(input).then((res: any) => {
      resolve(res)
    }, (err: any) => {
      reject(err)
    })
  })
}

export default fetchFindMany