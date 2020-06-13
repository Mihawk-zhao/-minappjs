<!--
 * @Author: your name
 * @Date: 2020-01-29 11:37:27
 * @LastEditTime: 2020-06-06 09:20:00
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
最新接口文档：[@minappjs接口文档](https://wefishbone.com/detail/5ec2781dc66ab4461293c8ea)  
按需加载配置：[@minappjs/cloud按需加载配置文档](https://wefishbone.com/detail/5ed5ae7b899abe7b80d67a5f)  
  
### 优点  
1. **跨平台性**：js平台写法一致，一处写，处处用（个别接口除外） 
2. **调用简单**：简化官方复杂的概念，查错、修改更加方便  
3. **方法丰富**：除官方的方法外，还增加了许多其他实用方法  
4. **代码提示**：支持代码提示，类型定义文件`index.d.ts`（大小约90kb）  

   
### 加入讨论  
大家可以加入群聊，一起讨论minapp问题，或知晓云的问题。欢迎加官方微信`fairy-pm`，备注`知晓云`，会拉你进入讨论群。    
  
### 案例    
[Fishbone资讯](https://wefishbone.com)
    
### 更新日志    
#### v3.10.0  
- 支持按需加载。需要先进行[配置](https://wefishbone.com/detail/5ed5ae7b899abe7b80d67a5f)。  
- `delete`方法统一更名为`deleteData`。  