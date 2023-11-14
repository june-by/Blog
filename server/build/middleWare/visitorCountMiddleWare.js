"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../routes/Visitor/utils");
const visitorService_1 = __importDefault(require("../routes/Visitor/visitorService"));
const visitorCountMiddleWare = (req, res, next) => {
    if (Object.keys(req.cookies).indexOf(KEY_FOR_VISITOR) === -1) {
        const now = (0, utils_1.getKRTime)();
        const nextDay = (0, utils_1.getNextKRDay)();
        res.cookie(KEY_FOR_VISITOR, now.toString(), {
            expires: nextDay,
        });
        visitorService_1.default.addVisitor();
    }
    next();
};
exports.default = visitorCountMiddleWare;
const KEY_FOR_VISITOR = "VISITOR";
