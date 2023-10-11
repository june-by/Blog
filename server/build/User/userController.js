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
const userService_1 = __importDefault(require("./userService"));
const passport_1 = __importDefault(require("passport"));
const constants_1 = require("../src/constants");
const getUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.user)
        return res.status(200).json(null);
    const { id } = req.user;
    try {
        const user = yield userService_1.default.getUser({ id });
        return res.status(200).json(user);
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});
const addUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, nickname, password } = req.body;
        const isEmailExists = yield userService_1.default.checkEmailValidation({ email });
        if (isEmailExists)
            return res.status(403).send(constants_1.MESSAGE.ID_EXIST);
        const isNicknameExists = yield userService_1.default.checkNicknameValidation({
            nickname,
        });
        if (isNicknameExists)
            return res.status(403).send(constants_1.MESSAGE.NICKNAME_EXIST);
        yield userService_1.default.addUser({ email, nickname, password });
        res.status(200).send("ok");
    }
    catch (error) {
        console.error(error);
        next(error);
    }
});
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    passport_1.default.authenticate("local", (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err);
        }
        if (info) {
            return res.status(401).send(info.reason);
        }
        return req.login(user, (loginErr) => __awaiter(void 0, void 0, void 0, function* () {
            if (loginErr) {
                console.error(loginErr);
                return next(loginErr);
            }
            const userInfo = yield userService_1.default.getUser({ id: user.id });
            return res.status(200).json(userInfo);
        }));
    })(req, res, next);
});
const logout = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        req.logout(() => { });
        req.session.destroy(() => { });
        return res.send("ok");
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});
exports.default = { getUser, addUser, logout, login };
