
import { setArgs, getBaaSF, cloneDeep, isArray } from '../../utils/utils'
import { UPDATE_METHORD } from '../../constants/constants'
import { UPDATE_ERROR } from '../../constants/error'

let ArgsObj: {
  RequestBase?: string | undefined
  Header?: {
    'Content-Type'?: string
    'X-Hydrogen-Client-ID'?: string,
    'Authorization'?: string,
    'X-Hydrogen-Env-ID'?: string,
  }
}


type dataType = string | string[] | number | number[] | boolean | boolean[] | null | undefined | {
  [propName: string] : any
} | {
  [index: number]: any
}


type upMethodList = 'incr' | 'set' | 'unset' | 'patchObject' | 'geo' | 'append' | 'remove' | 'uAppend'


function fetchUpdate(table: string | number, id: string, params: {
  [propName: string]: [upMethodList, dataType] | dataType
}){
  let BaaS_F = getBaaSF()

  //webapi
  return new Promise((resolve, reject)=>{
    let updata: any = {}
    for(let pa in params){
      if(!isArray(params[pa])){
        //不是数组，则直接 set
        updata[pa] = params[pa]
        continue
      }
      if(UPDATE_METHORD.indexOf(params[pa][0]) > -1 ){
        switch(params[pa][0]){
          case 'set':
            updata[pa] = params[pa][1]
            break
          case 'geo':
            let temp = params[pa], tempGeo = {}
            temp.shift()
            if(temp.length > 1){
              tempGeo = cloneDeep({
                type: 'Polygon',
                coordinates: [temp]
              })
            }else{
              tempGeo = cloneDeep({
                type: 'Point',
                coordinates: temp[0]
              })
            }
            updata[pa] = tempGeo
            break
          case 'unset':
            updata[pa] = {}
            updata[pa]['$unset'] = ''
            break
          case 'incr':
            updata[pa] = {}
            updata[pa]['$incr_by'] = params[pa][1]
            break
          case 'append':
            updata[pa] = {}
            updata[pa]['$append'] = Array.isArray(params[pa][1]) ? params[pa][1] : [params[pa][1]]
            break
          case 'uAppend':
            updata[pa] = {}
            updata[pa]['$append_unique'] = Array.isArray(params[pa][1]) ? params[pa][1] : [params[pa][1]]
            break
          case 'remove':
            updata[pa] = {}
            updata[pa]['$remove'] = Array.isArray(params[pa][1]) ? params[pa][1] : [params[pa][1]]
            break
          case 'patchObject':
            updata[pa] = {}
            updata[pa]['$update'] = params[pa][1]
            break
          default:
            throw new Error(UPDATE_ERROR)
        }
      }else{
        //直接 set
        updata[pa] = params[pa]
      }
    }
    BaaS_F({
      method: 'put',
      url: `${ArgsObj.RequestBase}/hserve/v2.2/table/${table}/record/${id}/`,
      headers: ArgsObj.Header,
      data: updata
    }).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchUpdate(args: {clientID: string, host?: string, accessToken?: string, env?: string}){
  ArgsObj = setArgs(args)
  return fetchUpdate
}

export default initFetchUpdate