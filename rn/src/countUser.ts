/*
 * @Author: your name
 * @Date: 2020-05-30 13:46:26
 * @LastEditTime: 2020-06-03 19:27:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@minappjs/rn/src/countUser.ts
 */ 
import fetchFindUser from './findUser'


type methodList = '=' | '!=' | '<' | '<=' | '>' | '>=' |
'in' | 'notIn' | 'arrayContains' |
'contains' | 'matches' | 'stringLength' |
'hasKey' |
'isNull' | 'isExists' |
'include' | 'withinCircle' | 'withinRegion' | 'within'


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
    fetchFindUser(params).then((res: any) => {
      let num = res.data.meta.total_count
      resolve(num)
    }, err=>{
      reject(err)
    })
  })
}

export default fetchCountUser