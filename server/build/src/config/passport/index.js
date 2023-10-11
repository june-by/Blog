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
const local_1 = __importDefault(require("./local"));
const database_1 = require("../../../src/database");
const github_1 = __importDefault(require("./github"));
const kakao_1 = __importDefault(require("./kakao"));
exports.default = () => {
    passport_1.default.serializeUser((user, done) => {
        done(null, user.id); //서버에는 userid만 들고 있는다
    });
    passport_1.default.deserializeUser((id, done) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield database_1.Users.findOne({ where: { id } });
            done(null, user); //req.user안에 넣어줌.
        }
        catch (error) {
            console.error(error);
        }
    }));
    (0, local_1.default)();
    (0, github_1.default)();
    (0, kakao_1.default)();
};
