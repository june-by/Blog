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
var userService_1 = __importDefault(require("./userService"));
var passport_1 = __importDefault(require("passport"));
var getUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, user, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!req.user)
                    return [2 /*return*/, res.status(200).json(null)];
                id = req.user.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, userService_1.default.getUser({ id: id })];
            case 2:
                user = _a.sent();
                return [2 /*return*/, res.status(200).json(user)];
            case 3:
                err_1 = _a.sent();
                console.error(err_1);
                next(err_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var addUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, nickname, password, isEmailExists, isNicknameExists, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, email = _a.email, nickname = _a.nickname, password = _a.password;
                return [4 /*yield*/, userService_1.default.checkEmailValidation({ email: email })];
            case 1:
                isEmailExists = _b.sent();
                if (isEmailExists)
                    return [2 /*return*/, res.status(403).send("이미 사용 중인 아이디 입니다")];
                return [4 /*yield*/, userService_1.default.checkNicknameValidation({ nickname: nickname })];
            case 2:
                isNicknameExists = _b.sent();
                if (isNicknameExists)
                    return [2 /*return*/, res.status(403).send("이미 사용 중인 닉네임 입니다")];
                return [4 /*yield*/, userService_1.default.addUser({ email: email, nickname: nickname, password: password })];
            case 3:
                _b.sent();
                res.status(200).send("ok");
                return [3 /*break*/, 5];
            case 4:
                error_1 = _b.sent();
                console.error(error_1);
                next(error_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
var login = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        passport_1.default.authenticate("local", function (err, user, info) {
            if (err) {
                console.error(err);
                return next(err);
            }
            if (info) {
                return res.status(401).send(info.reason);
            }
            return req.login(user, function (loginErr) { return __awaiter(void 0, void 0, void 0, function () {
                var userInfo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (loginErr) {
                                console.error(loginErr);
                                return [2 /*return*/, next(loginErr)];
                            }
                            return [4 /*yield*/, userService_1.default.getUser({ id: user.id })];
                        case 1:
                            userInfo = _a.sent();
                            return [2 /*return*/, res.status(200).json(userInfo)];
                    }
                });
            }); });
        })(req, res, next);
        return [2 /*return*/];
    });
}); };
var logout = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            req.logout(function () { });
            req.session.destroy(function () { });
            return [2 /*return*/, res.send("ok")];
        }
        catch (err) {
            console.error(err);
            next(err);
        }
        return [2 /*return*/];
    });
}); };
exports.default = { getUser: getUser, addUser: addUser, logout: logout, login: login };
