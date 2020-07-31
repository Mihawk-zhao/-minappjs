
import { getBaaSF } from './utils/utils'

type Event = 'create' | 'update' | 'delete'
type Sid = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

interface ISubRes {
  after: {
    [key: string]: any
  }
  before: {
    [key: string]: any
  }
  event: 'on_init' | 'on_create' | 'on_update' | 'on_delete' | 'on_error',
  schema_id: number,
  schema_name: string,
  id: string
}

type ICallBack = (res: ISubRes, err?: any) => void

function fetchSubscribe(table: string | number, event: Event, callback: ICallBack, sid?: Sid){
  let BaaS_F = getBaaSF()
  let Product = new BaaS_F.TableObject(table)
  
  let tempRes: ISubRes = {
    after: {},
    before: {},
    event: 'on_init',
    schema_id: 0,
    schema_name: '',
    id: ''
  }

  let tempErr: any = ''

  jd[`${table}_${event}_${sid || '0'}`] = Product.subscribe(event, {
    oninit: () => {
      tempRes.event = 'on_init'
      callback(tempRes, tempErr)
    },
    onevent: (res: any) => {
      tempRes = res
      callback(tempRes, tempErr)
    },
    onerror: (err: any) => {
      tempErr = err
      tempRes.event = 'on_error'
      callback(tempRes, tempErr)
    },
  })
}

export default fetchSubscribe