
//内容库
import countContent_temp from './fetch/content/countContent'
import findCategory_temp from './fetch/content/findCategory'
import findContent_temp from './fetch/content/findContent'
import findContentGroup_temp from './fetch/content/findContentGroup'
import getCategory_temp from './fetch/content/getCategory'
import getContent_temp from './fetch/content/getContent'
import getContentGroup_temp from './fetch/content/getContentGroup'
//数据表
import count_temp from './fetch/data/count'
import countMany_temp from './fetch/data/countMany'
import deleteData_temp from './fetch/data/delete'
import find_temp from './fetch/data/find'
import findMany_temp from './fetch/data/findMany'
import get_temp from './fetch/data/get'
import getMany_temp from './fetch/data/getMany'
import set_temp from './fetch/data/set'
import setMany_temp from './fetch/data/setMany'
import setOneMany_temp from './fetch/data/setOneMany'
import update_temp from './fetch/data/update'
import updateMany_temp from './fetch/data/updateMany'
import updateOneMany_temp from './fetch/data/updateOneMany'
//文件
import countFile_temp from './fetch/file/countFile'
import deleteFile_temp from './fetch/file/deleteFile'
import findFile_temp from './fetch/file/findFile'
import getFile_temp from './fetch/file/getFile'
import upload_temp from './fetch/file/upload'
//云函数
import invoke_temp from './fetch/invoke/invoke'
//消息
import getAsyncJobResult_temp from './fetch/message/getAsyncJobResult'
import getServerDate_temp from './fetch/message/getServerDate'
import sendSmsCode_temp from './fetch/message/sendSmsCode'
import verifySmsCode_temp from './fetch/message/verifySmsCode'
//支付
import pay_temp from './fetch/pay/pay'
//网络请求
import request_temp from './fetch/request/request'
//数据表
//当前用户
import anonymous_temp from './fetch/user/anonymous'
import currentUser_temp from './fetch/user/currentUser'
import currentUserUpdate_temp from './fetch/user/currentUserUpdate'
import login_temp from './fetch/user/login'
import loginWith_temp from './fetch/user/loginWith'
import loginWithSmsVerificationCode_temp from './fetch/user/loginWithSmsVerificationCode'
import logout_temp from './fetch/user/logout'
import passwordReset_temp from './fetch/user/passwordReset'
import register_temp from './fetch/user/register'
//用户/用户组
import countUser_temp from './fetch/userGroup/countUser'
import countUserMany_temp from './fetch/userGroup/countUserMany'
import findUser_temp from './fetch/userGroup/findUser'
import findUserMany_temp from './fetch/userGroup/findUserMany'
import getUser_temp from './fetch/userGroup/getUser'



export default {
    countContent: countContent_temp(),
    findCategory: findCategory_temp(),
    findContent: findContent_temp(),
    findContentGroup: findContentGroup_temp(),
    getCategory: getCategory_temp(),
    getContent: getContent_temp(),
    getContentGroup: getContentGroup_temp(),
    
    count: count_temp(),
    countMany: countMany_temp(),
    delete: deleteData_temp(),
    find: find_temp(),
    findMany: findMany_temp(),
    get: get_temp(),
    getMany: getMany_temp(),
    set: set_temp(),
    setMany: setMany_temp(),
    setOneMany: setOneMany_temp(),
    update: update_temp(),
    updateMany: updateMany_temp(),
    updateOneMany: updateOneMany_temp(),

    countFile: countFile_temp(),
    deleteFile: deleteFile_temp(),
    findFile: findFile_temp(),
    getFile: getFile_temp(),
    upload: upload_temp(),

    invoke: invoke_temp(),

    getAsyncJobResult: getAsyncJobResult_temp(),
    getServerDate: getServerDate_temp(),
    sendSmsCode: sendSmsCode_temp(),
    verifySmsCode: verifySmsCode_temp(),

    pay: pay_temp(),

    request: request_temp(),

    anonymous: anonymous_temp(),
    currentUser: currentUser_temp(),
    currentUserUpdate: currentUserUpdate_temp(),
    login: login_temp(),
    loginWith: loginWith_temp(),
    loginWithSmsVerificationCode: loginWithSmsVerificationCode_temp(),
    logout: logout_temp(),
    passwordReset: passwordReset_temp(),
    register: register_temp(),

    countUser: countUser_temp(),
    countUserMany: countUserMany_temp(),
    findUser: findUser_temp(),
    findUserMany: findUserMany_temp(),
    getUser: getUser_temp(),
}


export const countContent = countContent_temp()
export const findCategory = findCategory_temp()
export const findContent = findContent_temp()
export const findContentGroup = findContentGroup_temp()
export const getCategory = getCategory_temp()
export const getContent = getContent_temp()
export const getContentGroup = getContentGroup_temp()
  
export const count = count_temp()
export const countMany = countMany_temp()
export const deleteData = deleteData_temp()
export const find = find_temp()
export const findMany = findMany_temp()
export const get = get_temp()
export const getMany = getMany_temp()
export const set = set_temp()
export const setMany = setMany_temp()
export const setOneMany = setOneMany_temp()
export const update = update_temp()
export const updateMany = updateMany_temp()
export const updateOneMany = updateOneMany_temp()

export const countFile = countFile_temp()
export const deleteFile = deleteFile_temp()
export const findFile = findFile_temp()
export const getFile = getFile_temp()
export const upload = upload_temp()

export const invoke = invoke_temp()

export const getAsyncJobResult = getAsyncJobResult_temp()
export const getServerDate = getServerDate_temp()
export const sendSmsCode = sendSmsCode_temp()
export const verifySmsCode = verifySmsCode_temp()

export const pay = pay_temp()

export const request = request_temp()

export const anonymous = anonymous_temp()
export const currentUser = currentUser_temp()
export const currentUserUpdate = currentUserUpdate_temp()
export const login = login_temp()
export const loginWith = loginWith_temp()
export const loginWithSmsVerificationCode = loginWithSmsVerificationCode_temp()
export const logout = logout_temp()
export const passwordReset = passwordReset_temp()
export const register = register_temp()

export const countUser = countUser_temp()
export const countUserMany = countUserMany_temp()
export const findUser = findUser_temp()
export const findUserMany = findUserMany_temp()
export const getUser = getUser_temp()