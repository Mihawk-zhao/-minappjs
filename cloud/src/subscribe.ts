
import { getBaaSF } from './utils/utils'

type Event = 'create' | 'update' | 'delete'
type SidNum = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9


function fetchSubscribe(table: string | number, event: Event, sid?: SidNum){
  let BaaS_F = getBaaSF()
  return new Promise((resolve, reject)=>{
    let Product = new BaaS_F.TableObject(table)
    global[`${table}_${event}_${sid}`] = Product.subscribe(event, {
      oninit: () => {
        console.log(`订阅成功==>`)
        resolve('success')
      },
      onevent: (res: any) => {
        console.log(`订阅推送==>`, res)
        resolve(res)
      },
      onerror: (err: any) => {
        console.log(`订阅断开==>`, err)
        reject(err)
      },
    })
  })
}

export default fetchSubscribe