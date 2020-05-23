"use strict";
/*
 * @Author: your name
 * @Date: 2020-01-28 12:36:10
 * @LastEditTime: 2020-05-18 09:42:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/cloud/src/index.ts
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.set = exports.get = exports.getb = void 0;
//数据表
var get_1 = __importDefault(require("./fetch/data/get"));
var set_1 = __importDefault(require("./fetch/data/set"));
exports.getb = get_1.default();
exports.get = get_1.default();
exports.set = set_1.default();
exports.default = {
    get: get_1.default(),
    set: set_1.default(),
};
