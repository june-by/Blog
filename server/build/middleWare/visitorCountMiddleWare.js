"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const visitorCountMiddleWare = (req, res, next) => {
    console.log("req.cookies : ", Object.keys(req.cookies));
    next();
};
exports.default = visitorCountMiddleWare;
