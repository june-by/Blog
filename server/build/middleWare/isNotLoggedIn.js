"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        next();
    }
    else {
        return res.status(401).send("로그인하지 않은 사용자만 접근 가능합니다.");
    }
};
exports.default = isNotLoggedIn;
