/*
 * @Author: your name
 * @Date: 2020-05-18 18:02:23
 * @LastEditTime: 2020-06-06 08:57:36
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@minappjs/weapp/src/setMany.ts
 */ 

import fetchSet from './set'
import { FIND_MANY_L_ERROR } from './constants/error'
const pLimit = require('p-limit')


type dataType = string | string[] | number | number[] | boolean | boolean[] | null | undefined | {
  [propName: string] : any
} | {
  [index: number]: any
}



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