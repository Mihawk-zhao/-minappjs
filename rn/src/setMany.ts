/*
 * @Author: your name
 * @Date: 2020-05-30 13:46:26
 * @LastEditTime: 2020-06-03 19:41:01
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@minappjs/rn/src/setMany.ts
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
function initFetchSetMany(){

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

  return fetchSetMany
}

export default initFetchSetMany