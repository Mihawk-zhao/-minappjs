/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:11
 * @LastEditTime: 2020-06-02 11:31:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/cloud/src/fetch/data/setOneMany.ts
 */ 

import { getBaaSF, changeSetManyParams } from './utils/utils'


type dataType = string | string[] | number | number[] | boolean | boolean[] | null | undefined | {
  [propName: string] : any
} | {
  [index: number]: any
}

function fetchSetOneMany(table: string | number, params: {
  [index: number]: {
    [propName: string]: ['geo', ...any[]] | dataType
  }
}, isTrigger: boolean){
  let BaaS_F = getBaaSF()


  return new Promise((resolve, reject)=>{
    let MyTableObject = new BaaS_F.TableObject(table)
    MyTableObject.createMany(changeSetManyParams(params), {enableTrigger: isTrigger || false}).then((res: any) => {
      resolve(res.data.succeed)
    }, (err: any) => {
      //err 为 HError 对象
      reject(err)
    })
  })
  
  
}

export default fetchSetOneMany