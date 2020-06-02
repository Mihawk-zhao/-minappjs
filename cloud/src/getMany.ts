/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:11
 * @LastEditTime: 2020-06-02 11:35:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/cloud/src/fetch/data/getMany.ts
 */ 

import fetchGet from './get'
import { FIND_MANY_L_ERROR } from './constants/error'
const pLimit = require('p-limit')

// 同时进行多张表的GET
function fetchGetMany(getArray: {
  [index: number]: [string | number, string, {
    select: string[]
    expand: string[]
  }]
}, plimit: number = 10){
  return new Promise((resolve, reject)=>{
    let limit = pLimit(plimit)
    let input = []
    if(getArray.length === 0){
      throw new Error(FIND_MANY_L_ERROR)
    }
    for(let i = 0; i < getArray.length; i++){
      input.push(limit(() => fetchGet(getArray[i][0], getArray[i][1], getArray[i][2] || {})))
    }
    Promise.all(input).then((res: any) => {
      resolve(res)
    }, (err: any) => {
      reject(err)
    })
  })
}


export default fetchGetMany