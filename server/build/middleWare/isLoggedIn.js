"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _constants_1 = require("../constants");
const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    }
    else {
        res.status(401).send(_constants_1.MESSAGE.LOGIN_NEEDED);
    }
};
exports.default = isLoggedIn;
