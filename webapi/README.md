<!--
 * @Author: your name
 * @Date: 2020-01-29 11:37:27
 * @LastEditTime: 2020-05-23 12:07:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /minapp-fetch/README.md
 -->

### 知晓云常用接口封装（js跨平台）    
   
知晓云让后台开发变得更简单，我们让知晓云开发变得更简单。  
  
  
使用：  
```js
const minapp = require('minapp-fetch').init('webapi', {
  clientID: '', //必填
  host: '',  //为自定义域名(如: https://api.wefishbone.com)
  accessToken: '', //用户token
  env: '' //开发环境 ID，用于区分生产环境与其他开发环境，默认为生产环境
})
```  
  
### 文档  
最新接口文档，可在[@minappjs文档](https://wefishbone.com/detail/5ec2781dc66ab4461293c8ea)里查看  
  
### 优点  
1. **跨平台性**：js平台写法一致，一处写，处处用（个别接口除外） 
2. **调用简单**：简化官方复杂的概念，查错、修改更加方便  
3. **方法丰富**：除官方的方法外，还增加了许多其他实用方法  
4. **代码提示**：支持代码提示，类型定义文件`index.d.ts`  
  
    
    
#### v3.0.0  
- 此`webapi`还是以前的引用方法。
   
### 应用案例    
[Fishbone资讯](https://wefishbone.com)
  
  