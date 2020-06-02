/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:12
 * @LastEditTime: 2020-06-02 11:24:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/cloud/src/fetch/userGroup/countUserMany.ts
 */ 
import fetchFindUser from './findUser'
import { FIND_MANY_L_ERROR } from './constants/error'
const pLimit = require('p-limit')

type methodList = '=' | '!=' | '<' | '<=' | '>' | '>=' |
'in' | 'notIn' | 'arrayContains' |
'contains' | 'matches' | 'stringLength' |
'hasKey' |
'isNull' | 'isExists' |
'include' | 'withinCircle' | 'withinRegion' | 'within'




function fetchCountUserMany(findArray: {
  [index: number]: {
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
  }
}, plimit: number = 10){
  return new Promise((resolve, reject)=>{
    let limit = pLimit(plimit)
    let input = []
    if(findArray.length === 0){
      throw new Error(FIND_MANY_L_ERROR)
    }
    for(let i = 0; i < findArray.length; i++){
      findArray[i].limit = 1
      findArray[i].withCount = true
      input.push(limit(() => fetchFindUser(findArray[i])))
    }
    Promise.all(input).then(res=>{
      let numList = []
      for(let j = 0; j < res.length; j++){
        numList.push(res[j].data.meta.total_count)
      }
      resolve(numList)
    }, err=>{
      reject(err)
    })
  })
}


export default fetchCountUserMany