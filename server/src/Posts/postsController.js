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
var postsService_1 = __importDefault(require("./postsService"));
var getMainPosts = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var page, posts, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                page = req.params.page;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, postsService_1.default.getMainPosts({ page: page })];
            case 2:
                posts = _a.sent();
                return [2 /*return*/, res.status(200).json(posts)];
            case 3:
                err_1 = _a.sent();
                console.error(err_1);
                next(err_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var getCategoryPosts = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, page, category, posts, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.params, page = _a.page, category = _a.category;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, postsService_1.default.getCategoryPosts({ page: page, category: category })];
            case 2:
                posts = _b.sent();
                return [2 /*return*/, res.status(200).json(posts)];
            case 3:
                err_2 = _b.sent();
                console.error(err_2);
                next(err_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var getCategoryPostsCount = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var categoryCount, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, postsService_1.default.getCategoryPostsCount()];
            case 1:
                categoryCount = _a.sent();
                res.status(200).json(categoryCount);
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                console.error(err_3);
                next(err_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var getPostsBySearchKeyWord = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var keyword, posts, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                keyword = req.params.keyword;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, postsService_1.default.getPostsBySearchKeyWord({ keyword: keyword })];
            case 2:
                posts = _a.sent();
                res.status(200).json(posts);
                return [3 /*break*/, 4];
            case 3:
                err_4 = _a.sent();
                console.error(err_4);
                next(err_4);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var getPostsByTag = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var keyword, posts, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                keyword = req.params.keyword;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, postsService_1.default.getPostsByTag({ keyword: keyword })];
            case 2:
                posts = _a.sent();
                res.status(200).json(posts);
                return [3 /*break*/, 4];
            case 3:
                err_5 = _a.sent();
                console.error(err_5);
                next(err_5);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var getPostsLength = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var category, length_1, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                category = req.params.category;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, postsService_1.default.getPostsCount({ category: category })];
            case 2:
                length_1 = _a.sent();
                res.status(200).json({ length: length_1 });
                return [3 /*break*/, 4];
            case 3:
                err_6 = _a.sent();
                console.error(err_6);
                next(err_6);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var getTopViewsPosts = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var posts, err_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, postsService_1.default.getTopViewsPosts()];
            case 1:
                posts = _a.sent();
                return [2 /*return*/, res.status(201).json(posts)];
            case 2:
                err_7 = _a.sent();
                console.error(err_7);
                next(err_7);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var postsController = {
    getMainPosts: getMainPosts,
    getCategoryPosts: getCategoryPosts,
    getPostsLength: getPostsLength,
    getCategoryPostsCount: getCategoryPostsCount,
    getPostsBySearchKeyWord: getPostsBySearchKeyWord,
    getPostsByTag: getPostsByTag,
    getTopViewsPosts: getTopViewsPosts,
};
exports.default = postsController;
