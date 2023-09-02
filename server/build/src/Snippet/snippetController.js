"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var snippetService_1 = __importDefault(require("./snippetService"));
var axios_1 = __importDefault(require("axios"));
var clientUrl_1 = __importDefault(require("../../src/constants/clientUrl"));
var getAllSnippetsId = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var snippetsId, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, snippetService_1.default.getAllSnippetsId()];
            case 1:
                snippetsId = _a.sent();
                return [2 /*return*/, res.status(200).json(snippetsId)];
            case 2:
                err_1 = _a.sent();
                console.error(err_1);
                next(err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var getAllSnippets = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var snippets, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, snippetService_1.default.getAllSnippets()];
            case 1:
                snippets = _a.sent();
                res.status(200).json(snippets);
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                console.log(err_2);
                next(err_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var addSnippet = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var snippet, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, snippetService_1.default.addSnippet(req.body)];
            case 1:
                snippet = _a.sent();
                return [2 /*return*/, res.status(200).json(snippet)];
            case 2:
                err_3 = _a.sent();
                console.log(err_3);
                next(err_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var updateSnippet = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var snippetId, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                snippetId = req.params.snippetId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                return [4 /*yield*/, snippetService_1.default.updateSnippet(__assign(__assign({}, req.body), { snippetId: snippetId }))];
            case 2:
                _a.sent();
                if (!(process.env.NODE_ENV === "production")) return [3 /*break*/, 4];
                return [4 /*yield*/, axios_1.default.post("".concat(clientUrl_1.default, "/api/revalidate-snippet?secret=").concat(process.env.SECRET_REVALIDATE_TOKEN), {
                        id: snippetId,
                    })];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4: return [2 /*return*/, res.json({
                    message: "게시글 수정이 완료되었습니다. 메인화면으로 돌아갑니다",
                })];
            case 5:
                err_4 = _a.sent();
                console.log(err_4);
                next(err_4);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
var getSnippet = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var snippetId, snippet, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                snippetId = req.params.snippetId;
                return [4 /*yield*/, snippetService_1.default.getSnippet({ snippetId: snippetId })];
            case 1:
                snippet = _a.sent();
                return [2 /*return*/, res.status(200).json(snippet)];
            case 2:
                err_5 = _a.sent();
                console.log(err_5);
                next(err_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var deleteSnippet = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var snippetId, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                snippetId = req.params.snippetId;
                return [4 /*yield*/, snippetService_1.default.deleteSnippet({ snippetId: snippetId })];
            case 1:
                _a.sent();
                return [2 /*return*/, res.status(200).json({ snippetId: snippetId })];
            case 2:
                err_6 = _a.sent();
                console.log(err_6);
                next(err_6);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.default = {
    getAllSnippets: getAllSnippets,
    addSnippet: addSnippet,
    getSnippet: getSnippet,
    updateSnippet: updateSnippet,
    getAllSnippetsId: getAllSnippetsId,
    deleteSnippet: deleteSnippet,
};
