
type Event = 'create' | 'update' | 'delete'
type SidNum = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

function fetchUnsubscribe(table: string | number, event: Event, sid?: SidNum){
  return new Promise((resolve, reject)=>{
    if(global[`${table}_${event}_${sid}`].unsubscribe){
      global[`${table}_${event}_${sid}`].unsubscribe()
      resolve('success')
    }
    reject('no subscribe')
  })
}

export default fetchUnsubscribe