### 介绍  
可以通过 `npm install minapp-fetch` 安装  
  

适合：  
**运营后台**、**云函数**、**小程序**、**Web**、**RN**、**Taro**、**uni-app**等js开发的  
   
   
  
> 如果你已在小程序里手动引入过官方sdk文件。且以`weapp`方式引用，
> 那就可以把minapp-fetch包里node_module下minapp-sdk删除，能节约200KB左右空间。
  
  
  
[知晓云官方文档](https://doc.minapp.com/)  
  
[知晓云运营后台脚手架](https://wefishbone.com/detail/5d513a076024f70bbe7fb63d)  
  
参数： 
  
| 接口类别 | 类别   | 说明 |
| :-----: | :--------: | :--------: |
| 小程序/web前端 |  default  | 默认（对应引入'minapp-sdk'） |
| 微信小程序 | weapp | 略 |
| 支付宝小程序 | alipay | 略 |
| QQ小程序 | qq | 略 |
| web前端 | web | 当默认的出问题时用（对应引入'minapp-sdk/lib/web'） |
| 云函数 | cloud | 知晓云云函数 |
| 运营后台 | op | 知晓云运营后台。注：table只能使用table_id（表ID） |  
| Web API | webapi | 知晓云 Web API(RN推荐)(配合默认使用，可实现Node服务端渲染) |  
  
### 使用方法  
```javascript
/* React Native 开发，可以使用webapi
  CLIENT_ID,     知晓云后台 应用ID
  REQUEST_BASE,  服务器域名/自定义域名
  ACCESS_TOKEN,  用户token
*/

//默认为web和微信小程序 api
//REQUEST_BASE: 为自定义域名(如: wefishbone.com),非必填
const minapp = require('minapp-fetch').init('default', CLIENT_ID, /**REQUEST_BASE**/)
//如果报错，请加'web'
const minapp = require('minapp-fetch').init('web', CLIENT_ID, /**REQUEST_BASE**/)


//小程序自己引入官方sdk文件的
/**** 
 如果你已手动引入过官方sdk，
 那就可以把minapp-fetch包里node_module下minapp-sdk删除,
 以减小小程序的体积。
**/
const minapp = require('minapp-fetch').init('weapp')
const minapp = require('minapp-fetch').init('qq')
const minapp = require('minapp-fetch').init('alipay')
const minapp = require('minapp-fetch').init('swan')
const minapp = require('minapp-fetch').init('op')  //运营后台
const minapp = require('minapp-fetch').init('cloud')  //云函数

/**** RN开发时，如果Andorid模拟器的请求出问题的话，可以改用Android真机调试 ****/
const minapp = require('minapp-fetch').init('webapi', CLIENT_ID, REQUEST_BASE, ACCESS_TOKEN)
//注意：('webapi', CLIENT_ID, REQUEST_BASE, ACCESS_TOKEN)的先后顺序，与v0.5.0等旧版不同！！

//使用
minapp.set().then(res => {}, err => {})
minapp.find().then(res => {}, err => {})
```  

### 当前用户  

  

#### anonymous()  
临时匿名用户  
```javascript
minapp.anonymous()
```  
      
  
#### currentUser()  
获取当前用户  
```js
minapp.currentUser()
```  
  
  
#### emailVerify()  
用户邮箱验证  
```js
minapp.emailVerify()
```  
  
#### login(params)  
通用登录  
```javascript
let params = {email: 'ifanrx@ifanr.com', password: 'ifanrx123'}
let params = {username: 'ifanrx', password: 'ifanrx123'}
let params = {phone: 'ifanrx', password: 'ifanrx123'}  //webapi暂不支持
minapp.login(params)
```  
  
  
#### loginWith(data, params)  
微信、QQ、支付宝、百度小程序登录  
```html
<button open-type="getUserInfo" bindgetuserinfo="userInfoHandler">用户授权</button>
```
```javascript
//百度、QQ、微信、小程序的登录方式差不多
let params = {
  createUser: true,   //是否创建用户，默认为 true
  syncUserProfile: 'setnx',   //可选值为 overwrite、setnx、false，默认值为setnx
                  //overwrite: 强制更新
                  //setnx: 仅当字段从未被赋值时才更新
                  //false: 不更新
}
//静默登录  该方法会进行简单的登录，不需要用户授权，即不会弹出授权框
minapp.loginWith(null, params)

//用户授权的登录
userInfoHandler(data) {
  minapp.loginWith(data, params).then(user => {
      // user 包含用户完整信息，详见下方描述
    }, err => {
      // **err 有两种情况**：用户拒绝授权，HError 对象上会包含基本用户信息：id、openid、unionid；其他类型的错误，如网络断开、请求超时等，将返回 HError 对象（详情见下方注解）
  })
},

//支付宝小程序登录
minapp.loginWith({
  forceLogin: true,
  scopes: ['auth_life_msg', 'auth_life_msg_tele'],
  createUser: true,
})
```  
  

#### loginThirdParty(provider, authPageUrl, params)  
第三方登录  
```javascript
/*
  loginThirdParty  -->
  thirdPartyAuth  -->
  redirectResult 当mode为redirect方式时，才用这个方法
  对应
  BaaS.auth.loginWithThirdParty  -->
  BaaS.auth.thirdPartyAuth()  -->
  BaaS.auth.getRedirectResult()  当mode为redirect方式时，才用这个方法
*/

//react网页使用示例
//Login页面的微信登录按钮，加入此方法
minapp.loginThirdParty('oauth-wechat-web', '/auth', {
  mode: 'popup-window',
})
//Auth页面，加入以下方法，专门用于微信授权的页面，不加其他东西。
componentDidMount(){
  minapp.thirdPartyAuth()
}
//然后，自动跳转，在Login页面就回调打印USER了
```  
    
#### loginWithSmsVerificationCode(phone, code, params)  
手机验证登录  
```javascript
let params = { createUser: true }  //默认值
minapp.loginWithSmsVerificationCode(phone, code, params)
``` 
  
#### logout()  
登出  
```js
minapp.logout()
```  
  
  
  
#### passwordReset(params)  
通过邮件找回密码  
```javascript
let params = {email: 'ifanrx@ifanr.com'}
minapp.passwordReset(params)
```  

#### register(params)  
通用注册  
```javascript
let params = {email: 'ifanrx@ifanr.com', password: 'ifanrx123'}
let params = {username: 'ifanrx', password: 'ifanrx123'}
let params = {phone: 'ifanrx', password: 'ifanrx123'}  
minapp.register(params)
```  
  

  
#### sendSmsCode(phone)  
发送短信验证码  
```js
minapp.sendSmsCode(phone)
```  
  
  
#### verifySmsCode(phone, code)  
校验短信验证码  
```js
minapp.verifySmsCode(phone, code)
```  
  

  

  
### 数据    
  
  
#### count(table, params)  
获取总条数  
```javascript  
//参数同find一样，但只有p和r参数
minapp.count(table, {
  p1: ['name', '=', 'wzj'],
  p2: ['title', 'in', ['Bob', 'Z', 'time']],
  p3: ['name', 'matches', /^abc/i],
  
  r: 'p1 && p3 || ( p2 && p4 )'
})
```  
  
  
#### countMany(countArray, plimit)  
批量获取总条数  
```javascript  
//参数同find一样，但只有p和r参数
minapp.countMany([ [table, params], ... ], plimit)

minapp.countMany([
  ['table1', {
    p1: ['name', '=', 'wzj']
  }],
  ['table2', {
    p1: ['title', 'in', ['Bob', 'Z', 'time']],
    p2: ['name', 'matches', /^abc/i],
    r: 'p1 || p2'
  }],
  ['table3', {
    p1: ['color', '!=', '#ff2eda']
  }],
]).then(numList => {
  let [num1, num2, num3] = numList
},err=>{})
```  
  
  
#### delete(table, id, options)  
```js  
minapp.delete(table, id)
```  
  
  
  
#### find(table, params)  
查询数据  
```javascript  
/* 
  查寻方法：
  =, !=, <, <=, >, >=, in, notIn, 
  contains, arrayContains, matches, stringLength,
  hasKey,
  isNull, isExists
  include, withinCircle, withinRegion, within
*/
//p: 查寻内容，请使用 p0 ~ p99 的方式加参
['字段', '查寻方法', '查寻内容']
//r: r规则的括号支持任意嵌套

let rule = 'p3 || p7'

minapp.find(table, {
  p1: ['cat_label1', 'in', userChannels=[]],
  p2: ['cat_label2', 'stringLength', 23], //查寻字符串长度为23的
  p4: ['cat_label2', 'stringLength', 23, 100], //查寻字符串长度在23到100的
  p3: ['id', 'notIn', history],
  p7: ['status', '=', 20],
  p15: ['geo_point', 'include', [15, 15]], //坐标点，经纬[longitude, latitude]
  p21: ['geo_point', 'withinCircle', [15, 15], r], //r、max_r、min_r单位km
  p23: ['geo_point', 'withinRegion', [15, 15], max_r, min_r],
  p28: ['geo_point', 'within', [10, 10], [23, 21], [55, 34], [10, 10]], //坐标点集，首点=尾点，经纬[longitude, latitude]
  p63: ['content', 'isNull', true],
  p93: ['content', 'isExists', false],

  r: isSelect ? rule : '(p1 && (p2 || p3)) && (p57 && p93)',
  page: 1, //默认值
  limit: 20, //默认值
  orderBy: '-created_at', //默认值
  expand: [], //默认值
  select: [], //默认值
  withCount: false, //默认值
})
```  
  
  
#### findMany(findArray, plimit)  
批量查询数据  
```javascript  
//参数同find一样
//plimit 为最大并发数，默认为10
minapp.findMany([ [table, params], ... ], plimit)  

minapp.findMany([
  ['table1', {
    p1: ['cat_label1', 'in', 'food'],
  }],
  ['table2', {
    p7: ['num', '>=', 190],
    p2: ['status', '=', 20],
    r: 'p2 && p7',
    page: 1,
    limit: 10,
    expand: ['book']
  }]
]).then(resList => {
  let [res1, res2] = resList
},err => {})
```  
  
  
#### get(table, id, params)  
获取数据项  
```javascript
//params为筛选条件，可不填
minapp.get(table, id, {
	select: [], //非必填
	expand: [],  //非必填
})
```  
  
  
#### getMany(getArray, plimit)  
批量获取数据项  
```javascript
//params为筛选条件，可不填
//plimit 为最大并发数，默认为10
minapp.getMany([ [table, id, params], ... ], plimit)  

minapp.getMany([
  ['table1', '5cua93udhaud389sjavid'],
  ['table2', '674fsafg4cbdfhaafg423'],
  ['table3', '7f32adfy5bsdfg3242gdg', {expand: ['book']}],
], 6).then(resList => {
  let [res1, res2, res3] = resList
},err => {})
```  
  
    

#### set(table, params)  
新增数据  
```javascript
//新增地理位置时，要带新增方法'geo'
minapp.set(table, {
  name: 'apple',
  price: 1,
  desc: ['good'],
  geo_point: ['geo', [15, 15]], //坐标点，经纬[longitude, latitude]
  geo_polygon: ['geo', [10, 10], [1, 2], [23, 55], [10, 10]], //形状，首点和末点相同
})
```  
  
#### setMany(setArray, plimit)  
批量新增数据  
```javascript
//plimit 为最大并发数，默认为10
minapp.setMany([ [table, params], ... ], plimit)  

minapp.setMany([
  ['table1', {price: 1}],
  ['table2', {name: 'aaa'}],
  ['table3', {time: 122213123, book: 'abc'}],
]).then(resList => {
  let [res1, res2, res3] = resList
},err => {})
```  
  
#### setOneMany(table, params, isTrigger)  
批量新增数据(同一张表)  
```javascript
//isTrigger是否触发触发器，默认为false
minapp.setOneMany(table, [
  {
    name: 'apple',
    price: 1,
    desc: ['good'],
    amount: 0
  }, {
    name: 'banana',
    price: 2,
    desc: ['good'],
    amount: 1
  }
])
```  
  
  
#### update(table, id, params)  
更新数据项  
```javascript
/** 
 * incr  //对应以前的 incrementBy 
 * set unset geo
 * append remove uAppend
 * patchObject
 */

{'字段', ['方法', '内容']}

//如果为 'set' 方法时，可简写，如
minapp.update(table, id, {
  num: 'ddddddd',
  content: 'abc',
  pirce: ['incr', 12],
  name: ['append', '666'],
  geo_point: ['geo', [15, 15]], //坐标点，经纬[longitude, latitude]
  geo_polygon: ['geo', [10, 10], [1, 2], [23, 55], [10, 10]], //形状，首点和末点相同
})
//和下面这个方法等同
minapp.update(table, id, {
  num: ['set', 'ddddddd'],
  content: ['set', 'abc'],
  pirce: ['incr', 12],
  name: ['append', '666'],
  geo_point: ['geo', [15, 15]], //坐标点，经纬[longitude, latitude]
  geo_polygon: ['geo', [10, 10], [1, 2], [23, 55], [10, 10]], //形状，首点和末点相同
})

//如果你更新的数组里有'set'，那还是别简写了
// data: ['set': ['set', 'ad', 'aa']]
```  
  
#### updateMany(updateArray, plimit)  
批量更新数据  
```javascript
//plimit 为最大并发数，默认为10
minapp.updateMany([ [table, id, params], ... ], plimit)  

minapp.updateMany([
  ['table1', '5cua93udhaud389sjavid', {
    num: ['set', 'ddddddd'],
    pirce: ['incr', 12],
    name: ['append', '666']
  }],
  ['table2', '674fsafg4cbdfhaafg423', {
    num: 'ddddddd',
  }],
], 6).then(resList => {
  let [res1, res2, res3] = resList
},err => {})
```  
  
#### updateOneMany(table, params)  
批量更新数据(同一张表)  
```javascript
minapp.updateOneMany(table, {
  p1: ['name', '=', 'wzj'],
  p2: ['title', 'in', ['12', '15']],

  r: 'p1 && p2',
  page: 1, //默认值
  limit: 20, //默认值
  enableTrigger: true, //默认值
  withCount: false, //默认值
  u: {
    num: 'ddddddd',
    pirce: ['incr', 12],
    name: ['append', '666']
  }
})
```  
  
  
### 内容库  
  
  
#### countContent(contentGroupID, params)  
内容总数  
```javascript
minapp.countContent(contentGroupID, {
  p1: ['name', '=', 'wzj'],
  r: 'p1'
})
``` 
   
  
#### findCategory(contentGroupID, params)  
内容库分类列表  
```javascript
minapp.findCategory(contentGroupID, {
  withCount: false, //默认值
  limit: 100, //默认值,不能更改
})
``` 
  
  
#### findContent(contentGroupID, params)  
内容列表  
```javascript
minapp.findContent(contentGroupID, {
  p1, //same with find()
  r
})
``` 
  
  
#### findContentGroup(params)  
内容库列表  
```javascript
minapp.findContentGroup({
  page: 1, //默认值
  limit: 20, //默认值
  withCount: false, //默认值
})
``` 
  
  
#### getCategory(contentGroupID, categoryID)  
分类详情  
```javascript
minapp.getCategory(contentGroupID, categoryID)
``` 
  
  
#### getContent(contentGroupID, categoryID, params)  
内容详情  
```javascript
minapp.getCategory(contentGroupID, richTextID, {
  select: [], //非必填
  expand: [],  //非必填
})
``` 
  
  
#### getContentGroup(contentGroupID)  
内容库详情  
```javascript
minapp.getContentGroup(contentGroupID)
``` 
  
  



### 文件  
  
  
#### deleteFile(fileIDs)  
删除文件  
```javascript
minapp.deleteFile('5cdki3kaofiefaiowef')
minapp.deleteFile(['5cdki3kaofiefaiowef', '5akdleiigkdak234dfa'])
```  

  
#### findFile(params)  
获取文件列表  
```javascript
//同find类似，但字段只能以下
{
  id: '',               //文件id
  name: '',             //文件名
  size: 324,            //文件大小，以字节为单位
  category_id: '',      //文件分类 id
  category_name: '',    //文件分类名
  created_at: 16623123, //创建时间
}
minapp.findFile({
  p1: ['category_name', '=', categoryName],

  withCount: false,
})
```  

    
  
#### getFile(fileID)  
获取文件  
```javascript
minapp.getFile(fileID)
```  
  

#### upload(fileParams, metaData)  
上传文件  
```javascript
minapp.upload(fileParams, metaData)

//小程序和web：
let fileParams = {
  filePath: '/tem/var/test.png',  //本地路径
  fileObj: '',     //文件对象（在 Web 端上传时提供该参数）
  fileType: '',    //文件类型，image / video / audio（在支付宝端上传时提供该参数）
}
let metaData = {
  categoryID: 'aidkfiekadifjadkf',  //要上传的文件分类 ID 
  categoryName: '分类2',       //或 要上传的文件分类名
}

//云函数
let fileParams = {
  fileObj: '',      //需要上传的文件uploadFile
}
let metaData = {      //文件meta信息
  categoryID: '',    //文件分类 ID
  fileName: '',       //文件名
  filePath: '',       //文件路径
  contentType: '',    //文件 MIME 类型
}

//webapi
let fileParams = {
  fileObj: '',      //需要上传的文件
}
let metaData = {      
  fileName: '',     //非必填
  categoryId: '',
  categoryName: '',   
}

//运营后台为：
let fileParams = {
  fileObj: '',    //文件对象
}
let metaData = {
  fileName: 'crop.gif',    //上传的文件名
  categoryID: '5a1ba7b708443e7fc5f2fb18',    //分类ID
}
```  

  
### 调用云函数  
  
#### invoke(invokeName, params, sync)  
调用云函数  
```js
//调用云函数
minapp.invoke(invokeName, {
  uid: 92184133
})
```  
  
  
### 支付  
  
#### pay(way, params)  
支付  
```javascript
//way = alipay  weapp  qq  swan
//params对象，详情可参考官方文档

//小程序类参数
minapp.pay('weapp', {
  totalCost,
  merchandiseDescription,
  merchandiseSchemaID,
  merchandiseRecordID
})
//web类参数
minapp.pay('weapp', {
  gatewayType: 'weixin_tenpay_native',
  totalCost: 0.1,
  merchandiseDescription: '深蓝色秋裤'
})
```  
  
  
### 消息  
  
#### getAsyncJobResult()  
获取异步任务结果  
```javascript
minapp.getAsyncJobResult().then(res => {
  
})
```  
  
  
#### getServerDate()  
获取服务器时间  
```javascript
minapp.getServerDate().then(res => {
  res.data.time  //2020-02-27T11:38:46.215336+08:00
  let date = new Date(res.data.time)
  console.log(date.getTime())    // 1582774726215
  console.log(date.valueOf())    // 1582774726215
  console.log(Date.parse(date))  // 1582774726000
})
```  
  
  
#### sendEmail(params)  
发送邮件  
```javascript
minapp.sendEmail({
  recipient: "aa@bb.com",    //收件人邮箱
  subject: "email title",    //邮件标题
  body: "email body"         //邮件内容
})
```  
  
  
#### sendSmsCode(phone, signatureID, userID)  
发送短信验证码  
```javascript
//signatureID、phone 必填
//userID  could/op平台才填写
minapp.sendSmsCode(phone, signatureID, userID)
```  
  
  
#### verifySmsCode(phone, code, userID)  
验证短信验证码  
```javascript
//userID  could/op平台才填写
minapp.verifySmsCode(phone, code, userID)
```  
  
  
  
  
### 网络请求  
  
#### request(params)  
网络请求  
```javascript  
/**
 * 云函数
 * web
 * 云营后台
 * webapi
 */
//都是对axios方法的封装
//目前只支持参数调用的方式，不支持minapp.request.get()的方式
minapp.request({
  // `url` 是用于请求的服务器 URL
  url: '/user',

  // `method` 是创建请求时使用的方法
  method: 'get', // 默认是 get

  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: 'https://some-domain.com/api/',

  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  transformRequest: [function (data) {
    // 对 data 进行任意转换处理
    return data;
  }],

  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    // 对 data 进行任意转换处理
    return data;
  }],

  // `headers` 是即将被发送的自定义请求头
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` 是即将与请求一起发送的 URL 参数
  // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
  params: {
    ID: 12345
  },

  // `paramsSerializer` 是一个负责 `params` 序列化的函数
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function(params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `data` 是作为请求主体被发送的数据
  // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
  // 在没有设置 `transformRequest` 时，必须是以下类型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属：FormData, File, Blob
  // - Node 专属： Stream
  data: {
    firstName: 'Fred'
  },

  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout: 1000,

  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false, // 默认的

  // `adapter` 允许自定义处理请求，以使测试更轻松
  // 返回一个 promise 并应用一个有效的响应.
  adapter: function (config) {
    /* ... */
  },

  // `auth` 表示应该使用 HTTP 基础验证，并提供凭据
  // 这将设置一个 `Authorization` 头，覆写掉现有的任意使用 `headers` 设置的自定义 `Authorization`头
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // 默认的

  // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
  xsrfCookieName: 'XSRF-TOKEN', // default

  // `xsrfHeaderName` 是承载 xsrf token 的值的 HTTP 头的名称
  xsrfHeaderName: 'X-XSRF-TOKEN', // 默认的

  // `onUploadProgress` 允许为上传处理进度事件
  onUploadProgress: function (progressEvent) {
    // 对原生进度事件的处理
  },

  // `onDownloadProgress` 允许为下载处理进度事件
  onDownloadProgress: function (progressEvent) {
    // 对原生进度事件的处理
  },

  // `maxContentLength` 定义允许的响应内容的最大尺寸
  maxContentLength: 2000,

  // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
  validateStatus: function (status) {
    return status >= 200 && status < 300; // 默认的
  },

  // `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
  // 如果设置为0，将不会 follow 任何重定向
  maxRedirects: 5, // 默认的

  // `httpAgent` 和 `httpsAgent` 分别在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理。允许像这样配置选项：
  // `keepAlive` 默认没有启用
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // 'proxy' 定义代理服务器的主机名称和端口
  // `auth` 表示 HTTP 基础验证应当用于连接代理，并提供凭据
  // 这将会设置一个 `Proxy-Authorization` 头，覆写掉已有的通过使用 `header` 设置的自定义 `Proxy-Authorization` 头。
  proxy: {
    host: '127.0.0.1',
    port: 9000,
    auth: : {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // `cancelToken` 指定用于取消请求的 cancel token
  // （查看后面的 Cancellation 这节了解更多）
  cancelToken: new CancelToken(function (cancel) {
  })
})



/** 
 * 微信小程序
 * QQ小程序
 * 百度小程序
 */
//对 wx.request() qq.request() swan.request() 方法的封装
minapp.request({
  url: 'some.api',  //接口地址
  method: 'GET',  //OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  data,          //请求参数
  header,        //设置请求的 header , header 中不能设置 Referer
  dataType       //默认为 json
})
```  
  
    
### 用户/用户组/用户组集  
  
  
#### addUserIntoGroup(users, groups)  
将用户添加至用户组  
```javascript
// users: 用户 ID (对应 _userprofile 表中的 id 字段) 数组
// groups: 用户组 ID 数组
minapp.addUserIntoGroup([1092612, 1092601], [8, 9])
```  
    
#### countUser(params)  
获取用户总条数  
```javascript  
//参数同find一样，但只有p和r参数
minapp.countUser({
  p1: ['name', '=', 'wzj'],
  p2: ['title', 'in', ['Bob', 'Z', 'time']],
  p3: ['name', 'matches', /^abc/i],
  
  r: 'p1 && p3 || ( p2 && p4 )'
})
```  
  
  
#### countUserMany(countArray, plimit)  
批量获取用户总条数  
```javascript  
//参数同find一样，但只有p和r参数
minapp.countUserMany([ params, ... ], plimit)

minapp.countUserMany([
  {
    p1: ['name', '=', 'wzj'],
    r: 'p1'
  },
  {
    p1: ['title', 'in', ['Bob', 'Z', 'time']],
    p2: ['name', 'matches', /^abc/i],
    r: 'p1 || p2'
  }
]).then(numList => {
  let [num1, num2] = numList
},err=>{})
```  
  
  
#### createSuperGroup(params)  
创建组集  
```javascript
// name: 用户组集名称
// children:  用户组 ID 数组  （非必填）
minapp.createSuperGroup({
  name: 'aa2',
  children: [8]
})
```  
    
#### createUserGroup(params)  
创建用户组  
```javascript
minapp.createUserGroup({
  name: '测试',     //用户组的名称
  parent:'11',     //组集 ID  (非必填)
})
```  
    
#### deleteSuperGroup(superGroupIDList)  
删除组集  
```javascript
// superGroupIDList: 用户组集 ID数组
minapp.deleteSuperGroup([1,3,4])
```  
  
   
#### deleteUserGroup(groupIDList)  
批量删除用户组  
```javascript
minapp.deleteUserGroup([
  12,     //用户组 ID
  14,
])
```  
   
  
#### findUser(params)  
查询用户列表  
```javascript
//params参数同fetchFind方法
minapp.findUser(params)
// 查询用户组 [123, 456, 789] 下的用户
minapp.findUser({
  p1: ['_group', 'in', [123, 456, 789]],
  r: 'p1',
})
```  
  
    
#### findUserMany(findArray, plimit)  
批量查询用户数据  
```javascript  
//参数同find一样
//plimit 为最大并发数，默认为10
minapp.findUserMany([ params, ... ], plimit)  

minapp.findUserMany([
  {
    p1: ['cat_label1', 'in', 'food'],
  },
  {
    p7: ['num', '>=', 190],
    p2: ['status', '=', 20],
    r: 'p2 && p7',
    page: 1,
    limit: 10,
    expand: ['book']
  }
]).then(resList => {
  let [res1, res2] = resList
},err => {})
```  
  
  
#### getUser(uid, params)  
通过uid，获取用户  
```javascript
let uid = 123456    // 用户id
let params = {
  expand: [],
  select: [],
}
minapp.getUser(uid, params)
```  
   
#### getSuperGroup(superGroupID)  
获取组集详情  
```javascript
// superGroupID: 用户组集 ID
minapp.getSuperGroup(11)
```  
  
  
#### getUserGroup(groupID)  
获取用户组详情  
```javascript
//groupID, 用户组ID
minapp.getUserGroup(groupID)
```  
  
    
#### getSuperGroupList(params)  
获取组集列表  
```javascript
// superGroupID: 用户组集 ID
minapp.getSuperGroupList({
  limit:20, 
  page: 1
})
```  
  

#### getUserGroupList(parentID, params)  
获取用户组列表  
```javascript
//parentID, 用户集ID
minapp.getUserGroupList(123, {
  limit: 20, //默认值
  page: 1, //默认值
})
// 查询所有用户组
minapp.getUserGroupList(false, {
  limit: 20, //默认值
  page: 1, //默认值
})
```  
  
  
#### removeUserFromGroup(users, groups)  
将用户移除用户组  
```javascript
minapp.removeUserFromGroup([1092601], [8, 9])
```  

  
  
#### updateUser(uid, params)   
更新用户信息  
```javascript
//云函数：
/** 
 * incr  //对应以前的 incrementBy 
 * set unset 
 * append remove uAppend
 * patchObject
 */
minapp.updateUser(uid, {
  num: 'ddddddd',
  pirce: ['incr', 12],
  name: ['append', '666']
})


//web api 暂不支持

//小程序/web 使用currentUser的方法更新即可
```  
  
#### updateUserMany(params)  
批量更新用户信息  
```javascript
//params参数同fetchUpdateMany的params
minapp.updateUserMany({
  p1: ['name', '=', 'wzj'],
  p2: ['title', 'in', ['12', '15']],

  r: 'p1 && p2',
  page: 1, //默认值
  limit: 20, //默认值
  u: {
    num: 'ddddddd',
    pirce: ['incr', 12],
    name: ['append', '666']
  }
})
```  
  


 
  
#### updateSuperGroup(superGroupID, params)  
更新修改组集  
```javascript
// superGroupID: 用户组集 ID
minapp.updateSuperGroup(superGroupID, {
  name: 'a2222',   //用户组集名称
  children: [17],   //用户组 ID 数组
})
```   

  
#### updateUserGroup(groupID, params)  
更新用户组  
```javascript
minapp.updateUserGroup(12, {
  name: '测试',     //用户组的名称
})
```  
  

  
  
### 数据表  
  
  
#### getTable(table)  
获取数据表详情  
```javascript
//table为数据表的id
minapp.getTable(table)
```  
  
  
#### getTableList(params)  
获取数据表列表  
```javascript
minapp.getTableList({
  name: 'test_table',  //(运营后台才有name参数，不填，则查寻全部)
  limit:20, 
  page: 1
})
```  
   
     
### 错误码  
- `400`  Bad Request 参数错误
- `401`  Unauthorized 未授权
- `402`  Payment Required 应用欠费
- `403`  Forbidden 禁止访问
- `404`  Not Found 服务器找不到给定的资源
- `500`  Internal Server Error 内部服务器错误
- `600`  network disconnected 网络已断开
- `601`  request timeout 请求超时
- `602`  uninitialized 未调用 BaaS.init() 进行初始化
- `603`  unauthorized 用户尚未授权
- `604`  session missing 用户尚未登录
- `605`  incorrect parameter type 不正确的参数类型
- `607`  payment cancelled 用户取消支付
- `608`  payment failed 支付失败
- `609`  wxExtend function should be executed to allow plugin use wx.login, wx.getUserInfo, wx.requestPayment 使用小程序插件版本的 sdk，需先调用 wx.BaaS.wxExtend 方法完成初始化配置
- `610`  errorTracker uninitialized errorTracker 未初始化
- `611`  unsupported function 不支持该方法
- `612`  anonymous user is not allowed 临时匿名用户不支持调用该方法
- `613`  third party auth denied 用户拒绝第三方授权
- `614`  third party auth failed 第三方授权失败
- `615`  gateway type "weixin_tenpay_js" works in WeChat builtin browser only 支付类型 "weixin_tenpay_js" 只能在微信内置浏览器用使用  
  
   
  
    

