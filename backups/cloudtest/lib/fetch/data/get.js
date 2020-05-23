"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../utils/utils");
function fetchGet(table, id, params) {
    if (params === void 0) { params = {}; }
    var BaaS_F = utils_1.getBaaSF();
    return new Promise(function (resolve, reject) {
        var Product = new BaaS_F.TableObject(table);
        Product.select(params.select || []).expand(params.expand || []).get(id).then(function (res) {
            // success
            resolve(res);
        }, function (err) {
            // err
            reject(err);
        });
    });
}
function initFetchGet() {
    return fetchGet;
}
exports.default = initFetchGet;
