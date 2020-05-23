"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeFindGeoJson = exports.changeSetManyParams = exports.changeSetParams = exports.cloneDeep = exports.isArray = exports.getBaaSF = void 0;
//根据平台，返回请求方式， BaaS/axios
function getBaaSF() {
    // @ts-ignore：无法找到BaaS的错误
    return BaaS;
}
exports.getBaaSF = getBaaSF;
exports.isArray = function (value) {
    return Object.prototype.toString.call(value) === '[object Array]';
};
// 目前仅支持对象或数字的拷贝
exports.cloneDeep = function (source) {
    if (source === undefined || source === null)
        return Object.create(null);
    var target = exports.isArray(source) ? [] : Object.create(Object.getPrototypeOf(source));
    for (var keys in source) {
        if (source.hasOwnProperty(keys)) {
            if (source[keys] && typeof source[keys] === 'object') {
                target[keys] = exports.isArray(source[keys]) ? [] : {};
                target[keys] = exports.cloneDeep(source[keys]);
            }
            else {
                target[keys] = source[keys];
            }
        }
    }
    return target;
};
// 返回新增的对象，geopoint化
exports.changeSetParams = function (params) {
    var changeData = params;
    for (var p in params) {
        if (exports.isArray(params[p])) {
            if (params[p][0] === 'geo') {
                if (exports.isArray(params[p][1])) {
                    var temp = params[p];
                    temp.shift();
                    if (temp.length > 1) {
                        changeData[p] = exports.cloneDeep({
                            type: 'Polygon',
                            coordinates: [temp]
                        });
                    }
                    else {
                        changeData[p] = exports.cloneDeep({
                            type: 'Point',
                            coordinates: temp[0]
                        });
                    }
                }
            }
        }
    }
    return changeData;
};
exports.changeSetManyParams = function (params) {
    var change = [];
    for (var i = 0; i < params.length; i++) {
        change.push(exports.changeSetParams(params[i]));
    }
    return change;
};
// 返回geojson
exports.changeFindGeoJson = function (lparams) {
    var temp = [];
    if (lparams[1] === 'within') {
        lparams.splice(0, 2);
        temp = exports.cloneDeep({
            type: 'Polygon',
            coordinates: [lparams]
        });
    }
    else {
        temp = exports.cloneDeep({
            type: 'Point',
            coordinates: lparams[2]
        });
    }
    return temp;
};
