/*
 * @Author: your name
 * @Date: 2020-01-28 19:12:51
 * @LastEditTime: 2020-05-18 17:57:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /minapp-fetch/test/test.js
 */



import minapp, { updateUser, updateUserMany, subscribe, unsubscribe } from '../weapp/lib'

updateUser(234, {
  teim: ['remove', 'f']
})

updateUserMany({
  p0: ['stime', '!=', ''],
  r:false,
  u: {
    time: ['append']
  }
})

minapp.find('fff', {
  p0: ['afaf', '=', aa],
})

update('a', 'aa', {
  time: ['uAppend', [a]],
  name: ['set', 'aaaa']
})


subscribe('comment', 'create', (res) => {

}, '4')

unsubscribe('comment', 'create', '4')


subscribe('name', 'update', (res) => {
  if(res.event === 'on_update'){
    // 更新的订阅
  }
}, '2')










 

