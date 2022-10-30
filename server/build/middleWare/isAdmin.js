"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = void 0;
var isAdmin = function (req, res, next) {
    var id = req.user.id;
    if (id === "1") {
        next();
    }
    else {
        res.status(401).send("관리자만 이용 가능합니다.");
    }
};
exports.isAdmin = isAdmin;
