/*
 * @Author: your name
 * @Date: 2020-05-18 18:02:23
 * @LastEditTime: 2020-05-18 19:04:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/weapp/src/utils/utils.ts
 */ 

//根据平台，返回请求方式， BaaS/axios
export function getBaaSF(){
  // @ts-ignore：无法找到wx的错误
  return swan.BaaS
}



export const isArray = (value: any) => {
  return Object.prototype.toString.call(value) === '[object Array]'
}

// 目前仅支持对象或数字的拷贝
export const cloneDeep = (source: any) => {
  if (source === undefined || source === null) return Object.create(null)
  const target = isArray(source) ? [] : Object.create(Object.getPrototypeOf(source))
  for (const keys in source) {
    if (source.hasOwnProperty(keys)) {
      if (source[keys] && typeof source[keys] === 'object') {
        target[keys] = isArray(source[keys]) ? [] : {}
        target[keys] = cloneDeep(source[keys])
      } else {
        target[keys] = source[keys]
      }
    }
  }
  return target
}

// 返回新增的对象，geopoint化
export const changeSetParams = (params: any) => {
  let changeData = params
  for(let p in params){
    if(isArray(params[p])){
      if(params[p][0] === 'geo'){
        if(isArray(params[p][1])){
          let temp = params[p]
          temp.shift()
          if(temp.length > 1){
            changeData[p] = cloneDeep({
              type: 'Polygon',
              coordinates: [temp]
            })
          }else{
            changeData[p] = cloneDeep({
              type: 'Point',
              coordinates: temp[0]
            })
          }
        }
      }
    }
  }
  return changeData
}

export const changeSetManyParams = (params: any) => {
  let change = []
  for(let i = 0; i < params.length; i++){
    change.push(changeSetParams(params[i]))
  }
  return change
}


// 返回geojson
export const changeFindGeoJson = (lparams: any) => {  //['point', 'include', [23, 32]]
  let temp = []  
  if(lparams[1] === 'within'){
    lparams.splice(0,2)
    temp = cloneDeep({
      type: 'Polygon',
      coordinates: [lparams]
    })
  }else{
    temp = cloneDeep({
      type: 'Point',
      coordinates: lparams[2]
    })
  }
  return temp
}

