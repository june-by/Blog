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
const passport_kakao_1 = require("passport-kakao");
const database_1 = require("../../../src/database");
const userService_1 = __importDefault(require("../../../src/User/userService"));
exports.default = () => {
    passport_1.default.use(new passport_kakao_1.Strategy({
        clientID: process.env.KAKAO_CLIENT_ID,
        callbackURL: process.env.NODE_ENV === "production"
            ? "https://api.byjuun.com/user/kakao/callback"
            : "https://local.byjuun.com:8080/user/kakao/callback",
    }, (accessToken, refreshToken, profile, done) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { username } = profile;
            let user = yield database_1.Users.findOne({
                where: { nickname: username, provider: "kakao" },
            });
            if (!user) {
                yield userService_1.default.addUser({
                    nickname: username,
                    provider: "kakao",
                });
                user = yield database_1.Users.findOne({
                    where: { nickname: username, provider: "kakao" },
                });
            }
            return done(null, user);
        }
        catch (err) {
            console.log("err : ", err);
            return done(err);
        }
    })));
};
