"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _constants_1 = require("../constants");
const isAdmin = (req, res, next) => {
    var _a;
    const id = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    if (!id) {
        return res.status(401).send(_constants_1.MESSAGE.ONLY_AVAILABLE_TO_ADMIN);
    }
    if (String(id) !== process.env.ADMIN_ID) {
        return res.status(401).send(_constants_1.MESSAGE.ONLY_AVAILABLE_TO_ADMIN);
    }
    next();
};
exports.default = isAdmin;
