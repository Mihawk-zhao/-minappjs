/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:12
 * @LastEditTime: 2020-06-02 11:33:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/cloud/src/fetch/userGroup/countUser.ts
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
    }, (err: any)=>{
      reject(err)
    })
  })
}


export default fetchCountUser