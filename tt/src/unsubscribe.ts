type Event = 'create' | 'update' | 'delete'
type Sid = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

function fetchUnsubscribe(table: string | number, event: Event, sid?: Sid){
  if(!tt[`${table}_${event}_${sid || '0'}`]) return
  if(!tt[`${table}_${event}_${sid || '0'}`].unsubscribe) return
  tt[`${table}_${event}_${sid || '0'}`].unsubscribe()
}

export default fetchUnsubscribe