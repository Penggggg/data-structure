"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var test = [
    "ModuleA.*",
    "ModuleA.index",
    "ModuleA.ModuleB.*",
    "ModuleA.ModuleD.*",
    "ModuleA.ModuleB.index",
    "ModuleA.ModuleB.ModuleC.*",
    "ModuleA.ModuleB.add",
    "ModuleA.ModuleB.delete",
    "ModuleA.ModuleD.index",
    "ModuleA.ModuleB.ModuleC.index",
    "ModuleA.ModuleB.ModuleC.add",
    "ModuleA.ModuleB.ModuleC.delete",
    "Manage.*",
    "Manage.index",
    "Welcome.index",
    "Welcome.*"
];
var a = [];
var hehe = function (modulesNameArr, level) {
    if (level === void 0) { level = 1; }
    var lastLevels = modulesNameArr.filter(function (x) {
        return x.split('.').length === level + 1 && x.endsWith('.*');
    });
    var other = modulesNameArr.filter(function (x) { return x.split('.').length < level; });
    var rest = modulesNameArr.filter(function (x) {
        return !lastLevels.some(function (y) { return x.startsWith(y.split('.').slice(0, level).join('.')); });
    });
    a = __spreadArrays(a, lastLevels, other);
    other.map(function (x) { return rest.splice(rest.findIndex(function (y) { return y === x; }), 1); });
    rest.length > 0 && hehe(rest, level + 1);
};
hehe(test);
console.log('???', a);
