/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:11
 * @LastEditTime: 2020-06-02 11:36:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/cloud/src/fetch/data/setMany.ts
 */ 

import fetchSet from './set'
import { FIND_MANY_L_ERROR } from './constants/error'
const pLimit = require('p-limit')


type dataType = string | string[] | number | number[] | boolean | boolean[] | null | undefined | {
  [propName: string] : any
} | {
  [index: number]: any
}


// 同时进行多张表的查寻

function fetchSetMany(setArray: {
  [index: number]: [string | number, {
    [propName: string]: ['geo', ...any[]] | dataType
  }]
}, plimit = 10){
  return new Promise((resolve, reject) => {
    let limit = pLimit(plimit)
    let input = []
    if(setArray.length === 0){
      throw new Error(FIND_MANY_L_ERROR)
    }
    for(let i = 0; i < setArray.length; i++){
      input.push(limit(() => fetchSet(setArray[i][0], setArray[i][1])))
    }
    Promise.all(input).then((res: any) => {
      resolve(res)
    }, (err: any) => {
      reject(err)
    })
  })
}


export default fetchSetMany