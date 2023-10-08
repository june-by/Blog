"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVisitorDateInfo = void 0;
const getVisitorDateInfo = () => {
    const nowDate = new Date();
    return String(nowDate.getFullYear()) + String(nowDate.getMonth()) + String(nowDate.getDate());
};
exports.getVisitorDateInfo = getVisitorDateInfo;
