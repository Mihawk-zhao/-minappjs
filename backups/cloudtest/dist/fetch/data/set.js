"use strict";
/*
 * @Author: your name
 * @Date: 2020-01-24 17:40:03
 * @LastEditTime: 2020-05-18 09:23:36
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/cloud/src/fetch/data/set.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../utils/utils");
function fetchSet(table, params) {
    var BaaS_F = utils_1.getBaaSF();
    return new Promise(function (resolve, reject) {
        var Product = new BaaS_F.TableObject(table);
        var product = Product.create();
        product.set(utils_1.changeSetParams(params)).save().then(function (res) {
            // success
            resolve(res);
        }, function (err) {
            //err 为 HError 对象
            reject(err);
        });
    });
}
function initFetchSet() {
    return fetchSet;
}
exports.default = initFetchSet;
