"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextKRDay = exports.getKRTime = exports.getVisitorDateInfo = void 0;
const getVisitorDateInfo = () => {
    const nowDate = new Date();
    return (String(nowDate.getFullYear()) +
        String(nowDate.getMonth()) +
        String(nowDate.getDate()));
};
exports.getVisitorDateInfo = getVisitorDateInfo;
const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
const getKRTime = () => {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
    const kr_now = new Date(utc + KR_TIME_DIFF);
    return kr_now;
};
exports.getKRTime = getKRTime;
const getNextKRDay = () => {
    const now = (0, exports.getKRTime)();
    now.setDate(now.getDate() + 1);
    now.setHours(0, 0, 0, 0);
    return now;
};
exports.getNextKRDay = getNextKRDay;
