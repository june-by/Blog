"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("src/utils");
const cacheClearMiddleWare = (key) => {
    return function (req, res, next) {
        res.sendJsonResponse = res.json;
        res.sendResponse = res.send;
        const sendJsonResponse = (data) => {
            utils_1.memoryCache.delAll(key);
            res.sendJsonResponse(data);
        };
        const sendResponse = (data) => {
            utils_1.memoryCache.delAll(key);
            res.sendResponse(data);
        };
        res.json = sendJsonResponse;
        res.send = sendResponse;
        next();
    };
};
exports.default = cacheClearMiddleWare;
