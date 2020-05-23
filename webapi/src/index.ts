// args = [Platform, ClientID, RequestBase, AccessToken]


//内容库
import countContent from './fetch/content/countContent'
import findCategory from './fetch/content/findCategory'
import findContent from './fetch/content/findContent'
import findContentGroup from './fetch/content/findContentGroup'
import getCategory from './fetch/content/getCategory'
import getContent from './fetch/content/getContent'
import getContentGroup from './fetch/content/getContentGroup'
import setCategory from './fetch/content/setCategory'
import setContent from './fetch/content/setContent'
import updateCategory from './fetch/content/updateCategory'
import updateContent from './fetch/content/updateContent'

//数据表
import count from './fetch/data/count'
import countMany from './fetch/data/countMany'
import deleteData from './fetch/data/delete'
import find from './fetch/data/find'
import findMany from './fetch/data/findMany'
import get from './fetch/data/get'
import getMany from './fetch/data/getMany'
import set from './fetch/data/set'
import setMany from './fetch/data/setMany'
import setOneMany from './fetch/data/setOneMany'
import update from './fetch/data/update'
import updateMany from './fetch/data/updateMany'
import updateOneMany from './fetch/data/updateOneMany'

//文件
import countFile from './fetch/file/countFile'
import deleteFile from './fetch/file/deleteFile'
import findFile from './fetch/file/findFile'
import getFile from './fetch/file/getFile'
import upload from './fetch/file/upload'

//云函数
import invoke from './fetch/invoke/invoke'

//消息
import getAsyncJobResult from './fetch/message/getAsyncJobResult'
import getServerDate from './fetch/message/getServerDate'
import sendSmsCode from './fetch/message/sendSmsCode'
import verifySmsCode from './fetch/message/verifySmsCode'

//支付

//网络请求
import request from './fetch/request/request'

//数据表


//当前用户
import emailVerify from './fetch/user/emailVerify'
import login from './fetch/user/login'
import logout from './fetch/user/logout'
import passwordReset from './fetch/user/passwordReset'
import register from './fetch/user/register'

//用户/用户组
import countUser from './fetch/userGroup/countUser'
import countUserMany from './fetch/userGroup/countUserMany'
import findUser from './fetch/userGroup/findUser'
import findUserMany from './fetch/userGroup/findUserMany'
import getUser from './fetch/userGroup/getUser'
import updateUser from './fetch/userGroup/updateUser'



function init(...args: ['webapi', {clientID?: string, host?: string, accessToken?: string, env?: string}]){
  return {
    countContent: countContent(args),
    findCategory: findCategory(args),
    findContent: findContent(args),
    findContentGroup: findContentGroup(args),
    getCategory: getCategory(args),
    getContent: getContent(args),
    getContentGroup: getContentGroup(args),
    setCategory: setCategory(args),
    setContent: setContent(args),
    updateCategory: updateCategory(args),
    updateContent: updateContent(args),
    
    count: count(args),
    countMany: countMany(args),
    delete: deleteData(args),
    find: find(args),
    findMany: findMany(args),
    get: get(args),
    getMany: getMany(args),
    set: set(args),
    setMany: setMany(args),
    setOneMany: setOneMany(args),
    update: update(args),
    updateMany: updateMany(args),
    updateOneMany: updateOneMany(args),

    countFile: countFile(args),
    deleteFile: deleteFile(args),
    findFile: findFile(args),
    getFile: getFile(args),
    upload: upload(args),

    invoke: invoke(args),

    getAsyncJobResult: getAsyncJobResult(args),
    getServerDate: getServerDate(args),
    sendSmsCode: sendSmsCode(args),
    verifySmsCode: verifySmsCode(args),

    request: request(args),

    emailVerify: emailVerify(args),
    login: login(args),
    logout: logout(args),
    passwordReset: passwordReset(args),
    register: register(args),

    countUser: countUser(args),
    countUserMany: countUserMany(args),
    findUser: findUser(args),
    findUserMany: findUserMany(args),
    getUser: getUser(args),
    updateUser: updateUser(args),
  }
}


export { init }