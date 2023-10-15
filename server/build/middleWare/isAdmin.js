"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isAdmin = (req, res, next) => {
    var _a;
    const id = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    if (!id) {
        return res.status(401).send("관리자만 이용 가능합니다.");
    }
    if (String(id) !== process.env.ADMIN_ID) {
        return res.status(401).send("관리자만 이용 가능합니다.");
    }
    next();
};
exports.default = isAdmin;
