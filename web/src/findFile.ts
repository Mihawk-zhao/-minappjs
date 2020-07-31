
import { getBaaSF } from './utils/utils'
import { FIND_R_ERROR, FIND_CHECKR_ERROR, FIND_P_ERROR } from './constants/error'


type methodList = '=' | '!=' | '<' | '<=' | '>' | '>=' |
'in' | 'notIn' | 'arrayContains' |
'contains' | 'matches' | 'stringLength' |
'hasKey' |
'isNull' | 'isExists' |
'include' | 'withinCircle' | 'withinRegion' | 'within'

type fieldList = 'id' | 'name' | 'size' | 'category_id' | 'category_name' | 'created_at'


//
function fetchFindFile(params: {
  p0?: [fieldList | string, methodList, ...any[]]
  p1?: [fieldList | string, methodList, ...any[]]
  p2?: [fieldList | string, methodList, ...any[]]
  p3?: [fieldList | string, methodList, ...any[]]
  p4?: [fieldList | string, methodList, ...any[]]
  p5?: [fieldList | string, methodList, ...any[]]
  p6?: [fieldList | string, methodList, ...any[]]
  p7?: [fieldList | string, methodList, ...any[]]
  p8?: [fieldList | string, methodList, ...any[]]
  p9?: [fieldList | string, methodList, ...any[]]
  r: string
  page?: number
  limit?: number
  orderBy?: string | string[]
  expand?: string | string[]
  select?: string | string[]
  withCount?: false | boolean
  [propName: string]: [fieldList | string, methodList, ...any[]] | string | number | boolean | string[] | undefined
}){
  let BaaS_F = getBaaSF()

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
      query[ps[i]] = new BaaS_F.Query()
      switch(params[ps[i]][1]){
        case 'in':
          query[ps[i]].in(params[ps[i]][0], params[ps[i]][2])
          break
        case 'notIn':
          query[ps[i]].notIn(params[ps[i]][0], params[ps[i]][2])
          break
        case 'contains':
          query[ps[i]].contains(params[ps[i]][0], params[ps[i]][2])
          break
        case 'arrayContains':
          query[ps[i]].arrayContains(params[ps[i]][0], params[ps[i]][2])
          break
        case 'matches':
          query[ps[i]].matches(params[ps[i]][0], params[ps[i]][2])
          break
        case 'stringLength':
          let reg
          if(params[ps[i]].length > 3){
            reg = new RegExp(`^.{${params[ps[i]][2]},${params[ps[i]][3]}}$`)
          }else{
            reg = new RegExp(`^.{${params[ps[i]][2]}}$`)
          }
          query[ps[i]].matches(params[ps[i]][0], reg)
          break
        case 'hasKey':
          query[ps[i]].hasKey(params[ps[i]][0], params[ps[i]][2])
          break
        case 'isNull':
          params[ps[i]][2] ? query[ps[i]].isNull(params[ps[i]][0]) : query[ps[i]].isNotNull(params[ps[i]][0])
          break
        case 'isExists':
          params[ps[i]][2] ? query[ps[i]].exists(params[ps[i]][0]) : query[ps[i]].notExists(params[ps[i]][0])
          break
        case '=':
          query[ps[i]].compare(params[ps[i]][0], '=', params[ps[i]][2])
          break
        case '!=':
          query[ps[i]].compare(params[ps[i]][0], '!=', params[ps[i]][2])
          break
        case '<':
          query[ps[i]].compare(params[ps[i]][0], '<', params[ps[i]][2])
          break
        case '<=':
          query[ps[i]].compare(params[ps[i]][0], '<=', params[ps[i]][2])
          break
        case '>':
          query[ps[i]].compare(params[ps[i]][0], '>', params[ps[i]][2])
          break
        case '>=':
          query[ps[i]].compare(params[ps[i]][0], '>=', params[ps[i]][2])
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
            tempQQ = BaaS_F.Query.and(tempQQ, query[tempArr[n+2]])
          }
          if(tempArr[n+1] === '||'){
            tempQQ = BaaS_F.Query.or(tempQQ, query[tempArr[n+2]])
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
        QQ = BaaS_F.Query.and(QQ, query[tempArr2[n+2]])
      }
      if(tempArr2[n+1] === '||'){
        QQ = BaaS_F.Query.or(QQ, query[tempArr2[n+2]])
      }
      n += 2
    }


    let Product = new BaaS_F.File()
    Product.setQuery(QQ).limit(params.limit || 20).offset((params.limit || 20) * ((params.page || 1) - 1)).orderBy(params.orderBy || '-created_at').select(params.select || []).expand(params.expand || []).find({withCount: params.withCount || false}).then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // err
      reject(err)
    })


  })
}


export default fetchFindFile