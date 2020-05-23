
//内容库
import countContent_temp from './fetch/content/countContent'
import deleteCategory_temp from './fetch/content/deleteCategory'
import deleteContent_temp from './fetch/content/deleteContent'
import findCategory_temp from './fetch/content/findCategory'
import findContent_temp from './fetch/content/findContent'
import findContentGroup_temp from './fetch/content/findContentGroup'
import getCategory_temp from './fetch/content/getCategory'
import getContent_temp from './fetch/content/getContent'
import getContentGroup_temp from './fetch/content/getContentGroup'
import setCategory_temp from './fetch/content/setCategory'
import setContent_temp from './fetch/content/setContent'
import updateCategory_temp from './fetch/content/updateCategory'
import updateContent_temp from './fetch/content/updateContent'
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
import sendEmail_temp from './fetch/message/sendEmail'
import sendSmsCode_temp from './fetch/message/sendSmsCode'
import verifySmsCode_temp from './fetch/message/verifySmsCode'
//支付
import pay_temp from './fetch/pay/pay'
//网络请求
import request_temp from './fetch/request/request'
//数据表
import getTable_temp from './fetch/table/getTable'
import getTableList_temp from './fetch/table/getTableList'
//当前用户
import anonymous_temp from './fetch/user/anonymous'
import currentUser_temp from './fetch/user/currentUser'
import currentUserUpdate_temp from './fetch/user/currentUserUpdate'
import emailVerify_temp from './fetch/user/emailVerify'
import login_temp from './fetch/user/login'
import loginThirdParty_temp from './fetch/user/loginThirdParty'
import loginWith_temp from './fetch/user/loginWith'
import loginWithSmsVerificationCode_temp from './fetch/user/loginWithSmsVerificationCode'
import logout_temp from './fetch/user/logout'
import passwordReset_temp from './fetch/user/passwordReset'
import redirectResult_temp from './fetch/user/redirectResult'
import register_temp from './fetch/user/register'
import thirdPartyAuth_temp from './fetch/user/thirdPartyAuth'
//用户/用户组
import addUserIntoGroup_temp from './fetch/userGroup/addUserIntoGroup'
import countUser_temp from './fetch/userGroup/countUser'
import countUserMany_temp from './fetch/userGroup/countUserMany'
import createSuperGroup_temp from './fetch/userGroup/createSuperGroup'
import createUserGroup_temp from './fetch/userGroup/createUserGroup'
import deleteSuperGroup_temp from './fetch/userGroup/deleteSuperGroup'
import deleteUserGroup_temp from './fetch/userGroup/deleteUserGroup'
import findUser_temp from './fetch/userGroup/findUser'
import findUserMany_temp from './fetch/userGroup/findUserMany'
import getSuperGroup_temp from './fetch/userGroup/getSuperGroup'
import getSuperGroupList_temp from './fetch/userGroup/getSuperGroupList'
import getUser_temp from './fetch/userGroup/getUser'
import getUserGroup_temp from './fetch/userGroup/getUserGroup'
import getUserGroupList_temp from './fetch/userGroup/getUserGroupList'
import removeUserFromGroup_temp from './fetch/userGroup/removeUserFromGroup'
import updateSuperGroup_temp from './fetch/userGroup/updateSuperGroup'
import updateUser_temp from './fetch/userGroup/updateUser'
import updateUserGroup_temp from './fetch/userGroup/updateUserGroup'
import updateUserMany_temp from './fetch/userGroup/updateUserMany'



export default {
    countContent: countContent_temp(),
    deleteCategory: deleteCategory_temp(),
    deleteContent: deleteContent_temp(),
    findCategory: findCategory_temp(),
    findContent: findContent_temp(),
    findContentGroup: findContentGroup_temp(),
    getCategory: getCategory_temp(),
    getContent: getContent_temp(),
    getContentGroup: getContentGroup_temp(),
    setCategory: setCategory_temp(),
    setContent: setContent_temp(),
    updateCategory: updateCategory_temp(),
    updateContent: updateContent_temp(),
    
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
    sendEmail: sendEmail_temp(),
    sendSmsCode: sendSmsCode_temp(),
    verifySmsCode: verifySmsCode_temp(),

    pay: pay_temp(),

    request: request_temp(),

    getTable: getTable_temp(),
    getTableList: getTableList_temp(),

    anonymous: anonymous_temp(),
    currentUser: currentUser_temp(),
    currentUserUpdate: currentUserUpdate_temp(),
    emailVerify: emailVerify_temp(),
    login: login_temp(),
    loginThirdParty: loginThirdParty_temp(),
    loginWith: loginWith_temp(),
    loginWithSmsVerificationCode: loginWithSmsVerificationCode_temp(),
    logout: logout_temp(),
    passwordReset: passwordReset_temp(),
    redirectResult: redirectResult_temp(),
    register: register_temp(),
    thirdPartyAuth: thirdPartyAuth_temp(),

    addUserIntoGroup: addUserIntoGroup_temp(),
    countUser: countUser_temp(),
    countUserMany: countUserMany_temp(),
    createSuperGroup: createSuperGroup_temp(),
    createUserGroup: createUserGroup_temp(),
    deleteSuperGroup: deleteSuperGroup_temp(),
    deleteUserGroup: deleteUserGroup_temp(),
    findUser: findUser_temp(),
    findUserMany: findUserMany_temp(),
    getSuperGroup: getSuperGroup_temp(),
    getSuperGroupList: getSuperGroupList_temp(),
    getUser: getUser_temp(),
    getUserGroup: getUserGroup_temp(),
    getUserGroupList: getUserGroupList_temp(),
    removeUserFromGroup: removeUserFromGroup_temp(),
    updateSuperGroup: updateSuperGroup_temp(),
    updateUser: updateUser_temp(),
    updateUserGroup: updateUserGroup_temp(),
    updateUserMany: updateUserMany_temp(),
}


export const countContent = countContent_temp()
export const deleteCategory = deleteCategory_temp()
export const deleteContent = deleteContent_temp()
export const findCategory = findCategory_temp()
export const findContent = findContent_temp()
export const findContentGroup = findContentGroup_temp()
export const getCategory = getCategory_temp()
export const getContent = getContent_temp()
export const getContentGroup = getContentGroup_temp()
export const setCategory = setCategory_temp()
export const setContent = setContent_temp()
export const updateCategory = updateCategory_temp()
export const updateContent = updateContent_temp()
  
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
export const sendEmail = sendEmail_temp()
export const sendSmsCode = sendSmsCode_temp()
export const verifySmsCode = verifySmsCode_temp()

export const pay = pay_temp()

export const request = request_temp()

export const getTable = getTable_temp()
export const getTableList = getTableList_temp()

export const anonymous = anonymous_temp()
export const currentUser = currentUser_temp()
export const currentUserUpdate = currentUserUpdate_temp()
export const emailVerify = emailVerify_temp()
export const login = login_temp()
export const loginThirdParty = loginThirdParty_temp()
export const loginWith = loginWith_temp()
export const loginWithSmsVerificationCode = loginWithSmsVerificationCode_temp()
export const logout = logout_temp()
export const passwordReset = passwordReset_temp()
export const redirectResult = redirectResult_temp()
export const register = register_temp()
export const thirdPartyAuth = thirdPartyAuth_temp()

export const addUserIntoGroup = addUserIntoGroup_temp()
export const countUser = countUser_temp()
export const countUserMany = countUserMany_temp()
export const createSuperGroup = createSuperGroup_temp()
export const createUserGroup = createUserGroup_temp()
export const deleteSuperGroup = deleteSuperGroup_temp()
export const deleteUserGroup = deleteUserGroup_temp()
export const findUser = findUser_temp()
export const findUserMany = findUserMany_temp()
export const getSuperGroup = getSuperGroup_temp()
export const getSuperGroupList = getSuperGroupList_temp()
export const getUser = getUser_temp()
export const getUserGroup = getUserGroup_temp()
export const getUserGroupList = getUserGroupList_temp()
export const removeUserFromGroup = removeUserFromGroup_temp()
export const updateSuperGroup = updateSuperGroup_temp()
export const updateUser = updateUser_temp()
export const updateUserGroup = updateUserGroup_temp()
export const updateUserMany = updateUserMany_temp()