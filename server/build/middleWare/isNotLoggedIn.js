"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _constants_1 = require("../constants");
const isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        next();
    }
    else {
        return res.status(401).send(_constants_1.MESSAGE.LOGOUT_NEEDED);
    }
};
exports.default = isNotLoggedIn;
