
import { setArgs, getBaaSF, changeFindGeoJson } from '../../utils/utils'
import { FIND_R_ERROR, FIND_CHECKR_ERROR, FIND_P_ERROR } from '../../constants/error'

let ArgsObj: {
  RequestBase?: string | undefined
  Header?: {
    'Content-Type'?: string
    'X-Hydrogen-Client-ID'?: string,
    'Authorization'?: string,
    'X-Hydrogen-Env-ID'?: string,
  }
}

type methodList = '=' | '!=' | '<' | '<=' | '>' | '>=' |
'in' | 'notIn' | 'arrayContains' |
'contains' | 'matches' | 'stringLength' |
'hasKey' |
'isNull' | 'isExists' |
'include' | 'withinCircle' | 'withinRegion' | 'within'

function fetchFindContent(contentGroupID: number, params: {
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
  page?: number //默认值
  limit?: number //默认值
  orderBy?: string //默认值
  expand?: string[] //默认值
  select?: string[] //默认值
  withCount?: false | boolean //默认值
  [propName: string]: [string, methodList, ...any[]] | string | number | boolean | string[] | undefined
}){
  let BaaS_F = getBaaSF()

  //webapi
  return new Promise((resolve, reject)=>{
    if(!params.r){
      throw new Error(FIND_R_ERROR)
    }
    let r = params.r.replace(/\s+/g,'')       //去掉空格
    let query: any = {}

    let checkR = r.replace(/[^\(\)]/g, '')
    while(/\(\)/g.test(checkR)){
      checkR = checkR.replace(/\(\)/g,"")
    }
    //是否有多的括号，(
    if(checkR){
      throw new Error('"' + checkR + '": ' + FIND_CHECKR_ERROR)
    }

    let stack = []   //栈
    let topBrackets = ''     //最近的一个括号里的内容
    let stackTop: string | undefined = ''     //栈顶的内容
    let list = r.replace(/(\()|(\))/g, '#$1$2#').split(/#/g)

    //1.将所有p转换成query类型
    let ps = r.replace(/\(|\)/g, '').split(/&&|\|\|/g)
    for(let i = 0; i < ps.length; i++){
      query[ps[i]] = {}
      // 
      switch(params[ps[i]][1]){
        case 'in':
          // 
          query[ps[i]][params[ps[i]][0]] = {"$in": params[ps[i]][2]}
          break
        case 'notIn':
          // 
          query[ps[i]][params[ps[i]][0]] = {"$nin": params[ps[i]][2]}
          break
        case 'contains':
          // 
          query[ps[i]][params[ps[i]][0]] = {"$contains": params[ps[i]][2]}
          break
        case 'arrayContains':
          // 
          query[ps[i]][params[ps[i]][0]] = {"$all": params[ps[i]][2]}
          break
        case 'matches':
          // 
          query[ps[i]][params[ps[i]][0]] = {"$regex": params[ps[i]][2]}
          break
        case 'stringLength':
          let reg
          if(params[ps[i]].length > 3){
            reg = new RegExp(`^.{${params[ps[i]][2]},${params[ps[i]][3]}}$`)
          }else{
            reg = new RegExp(`^.{${params[ps[i]][2]}}$`)
          }
          query[ps[i]][params[ps[i]][0]] = {"$regex": reg}
          break
        case 'hasKey':
          // 
          query[ps[i]][params[ps[i]][0]] = {"$has_key": params[ps[i]][2]}
          break
        case 'include':
          // 
          query[ps[i]][params[ps[i]][0]] = {"$intersects": changeFindGeoJson(params[ps[i]])}
          break
        case 'withinCircle':
          // 
          query[ps[i]][params[ps[i]][0]] = {"$center": {
            // 
            radius: params[ps[i]][3] || 1,
            // 
            coordinates: [params[ps[i]][2][0], params[ps[i]][2][1]]
          }}
          break
        case 'withinRegion':
          // 
          query[ps[i]][params[ps[i]][0]] = {"$nearsphere": {
            geometry: changeFindGeoJson(params[ps[i]]),
            // 
            max_distance: params[ps[i]][3],
            // 
            min_distance: params[ps[i]][4] || 0
          }}
          break
        case 'within':
          // 
          query[ps[i]][params[ps[i]][0]] = {"$within": changeFindGeoJson(params[ps[i]])}
          break
        case 'isNull':
          // 
          query[ps[i]][params[ps[i]][0]] = {"$isnull": params[ps[i]][2]}
          break
        case 'isExists':
          // 
          query[ps[i]][params[ps[i]][0]] = {"$exists": params[ps[i]][2]}
          break
        case '=':
          // 
          query[ps[i]][params[ps[i]][0]] = {"$eq": params[ps[i]][2]}
          break
        case '!=':
          // 
          query[ps[i]][params[ps[i]][0]] = {"$ne": params[ps[i]][2]}
          break
        case '<':
          // 
          query[ps[i]][params[ps[i]][0]] = {"$lt": params[ps[i]][2]}
          break
        case '<=':
          // 
          query[ps[i]][params[ps[i]][0]] = {"$lte": params[ps[i]][2]}
          break
        case '>':
          // 
          query[ps[i]][params[ps[i]][0]] = {"$gt": params[ps[i]][2]}
          break
        case '>=':
          // 
          query[ps[i]][params[ps[i]][0]] = {"$gte": params[ps[i]][2]}
          break
        default:
          throw new Error(FIND_P_ERROR)
      }
    }

    for(let i = 0; i < list.length; i++){
      if(list[i] === ')'){
        //出栈
        stackTop = stack.pop()
        while (stackTop !== '(') {
          topBrackets = stackTop + topBrackets
          stackTop = stack.pop()
        }
        //进行and,or
        let tempArr = topBrackets.replace(/(&&)|(\|\|)/g, '#$1$2#').split(/#/g)
        // [p9, &&, p8, ||, p32]
        let tempQQ = query[tempArr[0]], n = 0
        while(n < tempArr.length - 1){
          if(tempArr[n+1] === '&&'){
            tempQQ = {
              "$and": [tempQQ, query[tempArr[n+2]]]
            }
          }
          if(tempArr[n+1] === '||'){
            tempQQ = {
              "$or": [tempQQ, query[tempArr[n+2]]]
            }
          }
          n += 2
        }
        query[`pp${i}`] = tempQQ
        topBrackets = `pp${i}`
        stack.push(topBrackets)
        topBrackets = ''
        continue
      }else{
        //入栈
        stack.push(list[i])
      }
    }
    let tempArr2 = stack.toString().replace(/,/g, '').replace(/(&&)|(\|\|)/g, '#$1$2#').split(/#/g)
    // [p9, &&, pp8, ||, p32]
    let QQ = query[tempArr2[0]], n = 0
    while(n < tempArr2.length - 1){
      if(tempArr2[n+1] === '&&'){
        QQ = {
          "$and": [QQ, query[tempArr2[n+2]]]
        }
      }
      if(tempArr2[n+1] === '||'){
        QQ = {
          "$or": [QQ, query[tempArr2[n+2]]]
        }
      }
      n += 2
    }
    
    BaaS_F({
      method: 'get',
      url: `${ArgsObj.RequestBase}/hserve/v2.2/content/detail/`,
      headers: ArgsObj.Header,
      params: {
        where: QQ,
        limit: params.limit || 20,
        offset: (params.limit || 20) * ((params.page || 1) - 1),
        order_by: params.orderBy || '-created_at',
        expand: (params.expand || []).toString(),
        keys: (params.select || []).toString(),
        return_total_count: params.withCount ? 1 : 0,
        content_group_id: contentGroupID,
      },
    }).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}


function initFetchFindContent(args: {clientID: string, host?: string, accessToken?: string, env?: string}){
  ArgsObj = setArgs(args)
  return fetchFindContent
}

export default initFetchFindContent