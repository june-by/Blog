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
const database_1 = require("../../src/database");
const bcrypt_1 = __importDefault(require("bcrypt"));
const getUser = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    return yield database_1.Users.findOne({
        where: { id },
        attributes: {
            exclude: ["password"],
        },
    });
});
const addUser = ({ email, nickname, password, provider, }) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPassword = password ? yield bcrypt_1.default.hash(password, 10) : "";
    yield database_1.Users.create({
        email: email || `${nickname}@kakao`,
        nickname,
        password: hashedPassword || "",
        provider: provider || "local",
    });
});
const checkEmailValidation = ({ email, }) => __awaiter(void 0, void 0, void 0, function* () {
    return !!(yield database_1.Users.findOne({
        where: {
            email,
        },
    }));
});
const checkNicknameValidation = ({ nickname, }) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield database_1.Users.findOne({
        where: {
            nickname,
        },
    });
    return user ? true : false;
});
exports.default = {
    getUser,
    addUser,
    checkEmailValidation,
    checkNicknameValidation,
};
