"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPDATE_METHORD = exports.PLATFORM_NAME_AXIOS = exports.PLATFORM_NAME_BAAS = exports.PLATFORM_NAME_ARR = exports.PLATFORM_NAME = void 0;
exports.PLATFORM_NAME = {
    ALIPAY: 'alipay',
    CLOUD: 'cloud',
    OP: 'op',
    QQ: 'qq',
    SWAN: 'swan',
    WEAPP: 'weapp',
    TT: 'tt',
    WEB: 'web',
    WEBAPI: 'webapi',
};
exports.PLATFORM_NAME_ARR = [
    'alipay',
    'cloud',
    'op',
    'qq',
    'swan',
    'weapp',
    'tt',
    'web',
    'webapi',
];
//以BaaS方式请求的平台
exports.PLATFORM_NAME_BAAS = [
    'alipay',
    'cloud',
    'qq',
    'swan',
    'weapp',
    'tt',
    'web',
];
//以axios请求的平台
exports.PLATFORM_NAME_AXIOS = [
    'op',
    'webapi',
];
//更新数据的方法
exports.UPDATE_METHORD = [
    'incr',
    'set',
    'geo',
    'unset',
    'append',
    'remove',
    'uAppend',
    'patchObject',
];
