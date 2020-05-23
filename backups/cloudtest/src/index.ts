/*
 * @Author: your name
 * @Date: 2020-01-28 12:36:10
 * @LastEditTime: 2020-05-18 09:42:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/cloud/src/index.ts
 */ 

//数据表
import getT from './fetch/data/get'
import setT from './fetch/data/set'



export const getb = getT()
export const get = getT()
export const set = setT()

export default {
  get: getT(),
  set: setT(),
}