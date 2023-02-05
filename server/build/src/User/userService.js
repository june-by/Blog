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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = __importDefault(require("../../models"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var User = models_1.default.User;
var getUser = function (_a) {
    var id = _a.id;
    return __awaiter(void 0, void 0, void 0, function () {
        var user, fullUserWithoutPassword;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, User.findOne({
                        where: { id: id },
                    })];
                case 1:
                    user = _b.sent();
                    return [4 /*yield*/, User.findOne({
                            where: { id: user.id },
                            attributes: {
                                exclude: ["password"],
                            },
                        })];
                case 2:
                    fullUserWithoutPassword = _b.sent();
                    return [2 /*return*/, fullUserWithoutPassword];
            }
        });
    });
};
var addUser = function (_a) {
    var email = _a.email, nickname = _a.nickname, password = _a.password, provider = _a.provider;
    return __awaiter(void 0, void 0, void 0, function () {
        var hashedPassword, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!password) return [3 /*break*/, 2];
                    return [4 /*yield*/, bcrypt_1.default.hash(password, 10)];
                case 1:
                    _b = _c.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _b = "";
                    _c.label = 3;
                case 3:
                    hashedPassword = _b;
                    return [4 /*yield*/, User.create({
                            //await 안넣어주면, 비동기이기 때문에, 뒤에 res.json()이 먼저실행될수도있음.
                            email: email || "".concat(nickname, "@kakao"),
                            nickname: nickname,
                            password: hashedPassword || "",
                            provider: provider || "local",
                        })];
                case 4:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    });
};
var checkEmailValidation = function (_a) {
    var email = _a.email;
    return __awaiter(void 0, void 0, void 0, function () {
        var user;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, User.findOne({
                        //ID가 같은사람이 있는지 검사
                        where: {
                            email: email,
                        },
                    })];
                case 1:
                    user = _b.sent();
                    return [2 /*return*/, user ? true : false];
            }
        });
    });
};
var checkNicknameValidation = function (_a) {
    var nickname = _a.nickname;
    return __awaiter(void 0, void 0, void 0, function () {
        var user;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, User.findOne({
                        //nickname이 같은 사람이 있는지 검사
                        where: {
                            nickname: nickname,
                        },
                    })];
                case 1:
                    user = _b.sent();
                    return [2 /*return*/, user ? true : false];
            }
        });
    });
};
exports.default = {
    getUser: getUser,
    addUser: addUser,
    checkEmailValidation: checkEmailValidation,
    checkNicknameValidation: checkNicknameValidation,
};
