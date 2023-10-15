"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _constants_1 = require("../../constants");
const utils_1 = require("./utils");
const visitorService_1 = __importDefault(require("./visitorService"));
const getVisitor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const totalVisitor = yield visitorService_1.default.getTotalVisitor();
        const todayVisitor = yield visitorService_1.default.getTodayVisitor({
            date: (0, utils_1.getVisitorDateInfo)(),
        });
        return res.status(201).json({ totalVisitor, todayVisitor });
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});
const addVisitor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield visitorService_1.default.addVisitor({ date: (0, utils_1.getVisitorDateInfo)() });
        return res.status(200).send(_constants_1.MESSAGE.SUCCESS);
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});
exports.default = {
    getVisitor,
    addVisitor,
};
