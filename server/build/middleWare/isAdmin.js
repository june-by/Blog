"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = void 0;
var isAdmin = function (req, res, next) {
    //const { id } = req.user as { id: number };
    console.log(req.user);
    next();
    // if (String(id) === process.env.ADMIN_ID) {
    //   next();
    // } else {
    //   res.status(401).send("관리자만 이용 가능합니다.");
    // }
};
exports.isAdmin = isAdmin;
