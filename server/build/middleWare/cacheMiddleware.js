"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheMiddleware = void 0;
const memory_cache_1 = __importDefault(require("memory-cache"));
const cacheMiddleware = (duration) => {
    return function (req, res, next) {
        const key = "__express__" + req.originalUrl || req.url;
        const data = memory_cache_1.default.get(key);
        if (data) {
            return res.status(200).send(data);
        }
        else {
            res.sendJsonResponse = res.json;
            res.sendResponse = res.send;
            const sendJsonResponse = (data) => {
                memory_cache_1.default.put(key, data, duration && duration * 1000);
                res.sendJsonResponse(data);
            };
            const sendResponse = (data) => {
                memory_cache_1.default.put(key, data, duration && duration * 1000);
                res.sendResponse(data);
            };
            res.json = sendJsonResponse;
            res.send = sendResponse;
            next();
        }
    };
};
exports.cacheMiddleware = cacheMiddleware;
