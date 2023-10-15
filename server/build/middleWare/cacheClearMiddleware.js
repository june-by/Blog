"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../utils");
const cacheClearMiddleWare = (key) => {
    return function (req, res, next) {
        res.sendJsonResponse = res.json;
        res.sendResponse = res.send;
        const sendJsonResponse = (data) => {
            _utils_1.memoryCache.delAll(key);
            res.sendJsonResponse(data);
        };
        const sendResponse = (data) => {
            _utils_1.memoryCache.delAll(key);
            res.sendResponse(data);
        };
        res.json = sendJsonResponse;
        res.send = sendResponse;
        next();
    };
};
exports.default = cacheClearMiddleWare;
