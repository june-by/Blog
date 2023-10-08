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
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const models_1 = require("../../models");
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.default = () => {
    passport_1.default.use(new passport_local_1.Strategy({
        usernameField: "email",
        passwordField: "password",
    }, (email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield models_1.Users.findOne({
                where: { email },
            });
            if (!user) {
                return done(null, false, { reason: "존재하지 않는 사용자입니다" });
            }
            const result = yield bcrypt_1.default.compare(password, user.password);
            if (result) {
                return done(null, user);
            }
            return done(null, false, { reason: "비밀번호가 틀렸습니다" });
        }
        catch (error) {
            console.error(error);
            return done(error);
        }
    })));
};
