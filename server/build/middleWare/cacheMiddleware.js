"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../utils");
const cacheMiddleware = (duration) => {
    return function (req, res, next) {
        const key = "__express__" + req.originalUrl || req.url;
        const data = _utils_1.memoryCache.get(key);
        if (data) {
            return res.status(200).json(data);
        }
        else {
            res.sendJsonResponse = res.json;
            res.sendResponse = res.send;
            const sendJsonResponse = (data) => {
                _utils_1.memoryCache.put(key, data, duration && duration * 1000);
                res.sendJsonResponse(data);
            };
            const sendResponse = (data) => {
                _utils_1.memoryCache.put(key, data, duration && duration * 1000);
                res.sendResponse(data);
            };
            res.json = sendJsonResponse;
            res.send = sendResponse;
            next();
        }
    };
};
exports.default = cacheMiddleware;
