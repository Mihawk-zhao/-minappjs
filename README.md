<!--
 * @Author: your name
 * @Date: 2020-01-29 11:37:27
 * @LastEditTime: 2020-05-23 12:53:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /minapp-fetch/README.md
 -->

### 知晓云js跨平台接口     
   
知晓云让后台开发变得更简单，我们让知晓云开发变得更简单。  
    
使用：  
```js
import minapp from '@minappjs/alipay'
//或
import { find } from '@minappjs/alipay'
//此方式引入的delete名称为deleteData
```  
  
### 文档  
最新接口文档，可在[@minappjs文档](https://wefishbone.com/detail/5ec2781dc66ab4461293c8ea)里查看  
  
### 优点  
1. **跨平台性**：js平台写法一致，一处写，处处用（个别接口除外） 
2. **调用简单**：简化官方复杂的概念，查错、修改更加方便  
3. **方法丰富**：除官方的方法外，还增加了许多其他实用方法  
4. **代码提示**：支持代码提示，类型定义文件`index.d.ts`  
  
> 下面就以最简单的and、or复杂组合查寻为例：
  
```js
/** 原方法 **/
let query1 = new wx.BaaS.Query()
query1.in('color', ['green', 'red', 'yellow'])
let query2 = new wx.BaaS.Query()
query2.compare('price', '>', 10)
let andQuery = wx.BaaS.Query.and(query1, query2)
let query3 = new wx.BaaS.Query()
query3.compare('amount', '>=', 3)
let orQuery = wx.BaaS.Query.or(andQuery, query3)
let Product = new wx.BaaS.TableObject(tableName)
Product.setQuery(orQuery).find().then(res => {
  // success
})


/** @minappjs/ 的各个平台写法都如下 **/
find(tableName, {
  p1: ['color', 'in', ['green', 'red', 'yellow']],
  p2: ['price', '>', 10],
  p3: ['amount', '>=', 3],
  r: '(p1 && p2) || p3'
}).then(res => {
  // success
})
```
  
> 知晓云API网关的推出，以后会重点更新`cloud`接口方法  
   
### 案例    
[Fishbone资讯](https://wefishbone.com)
  
  