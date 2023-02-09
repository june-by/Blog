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
var sequelize_1 = __importDefault(require("sequelize"));
var Post = models_1.default.Post, Tag = models_1.default.Tag, sequelize = models_1.default.sequelize;
var Op = sequelize_1.default.Op;
var getAllPostsId = function () { return __awaiter(void 0, void 0, void 0, function () {
    var posts;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Post.findAll({
                    attributes: ["id"],
                })];
            case 1:
                posts = _a.sent();
                return [2 /*return*/, posts];
        }
    });
}); };
var getMainPosts = function (_a) {
    var page = _a.page;
    return __awaiter(void 0, void 0, void 0, function () {
        var posts;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, Post.findAll({
                        order: [["createdAt", "DESC"]],
                        limit: 16,
                        offset: (Number(page) - 1) * 16,
                        attributes: ["id", "title", "category", "createdAt", "thumbNailUrl", "views", "isPublic"],
                        include: [
                            {
                                model: Tag,
                                attributes: ["id", "content"],
                            },
                        ],
                    })];
                case 1:
                    posts = _b.sent();
                    return [2 /*return*/, posts];
            }
        });
    });
};
var getCategoryPosts = function (_a) {
    var category = _a.category, page = _a.page;
    return __awaiter(void 0, void 0, void 0, function () {
        var posts;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, Post.findAll({
                        where: { category: category },
                        order: [["createdAt", "DESC"]],
                        limit: 16,
                        offset: (Number(page) - 1) * 16,
                        attributes: ["id", "title", "category", "createdAt", "thumbNailUrl", "views", "isPublic"],
                        include: [
                            {
                                model: Tag,
                                attributes: ["id", "content"],
                            },
                        ],
                    })];
                case 1:
                    posts = _b.sent();
                    return [2 /*return*/, posts];
            }
        });
    });
};
var getPostsBySearchKeyWord = function (_a) {
    var page = _a.page, keyword = _a.keyword;
    return __awaiter(void 0, void 0, void 0, function () {
        var posts;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, Post.findAll({
                        where: {
                            title: (_b = {},
                                _b[Op.like] = "%" + decodeURIComponent(keyword) + "%",
                                _b),
                        },
                        order: [["createdAt", "DESC"]],
                        limit: 16,
                        offset: (Number(page) - 1) * 16,
                        attributes: {
                            exclude: ["content", "updatedAt"],
                        },
                        include: [
                            {
                                model: Tag,
                                attributes: ["id", "content"],
                            },
                        ],
                    })];
                case 1:
                    posts = _c.sent();
                    return [2 /*return*/, posts];
            }
        });
    });
};
var getPostsByTag = function (_a) {
    var page = _a.page, keyword = _a.keyword;
    return __awaiter(void 0, void 0, void 0, function () {
        var posts;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, Post.findAll({
                        attributes: {
                            exclude: ["content", "updatedAt"],
                        },
                        order: [["createdAt", "DESC"]],
                        limit: 16,
                        offset: (Number(page) - 1) * 16,
                        include: [
                            {
                                model: Tag,
                                where: { content: keyword },
                                attributes: ["id", "content"],
                            },
                        ],
                    })];
                case 1:
                    posts = _b.sent();
                    return [2 /*return*/, posts];
            }
        });
    });
};
var getCategoryPostsCount = function () { return __awaiter(void 0, void 0, void 0, function () {
    var categoryCount;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Post.findAll({
                    attributes: ["category", [sequelize_1.default.fn("COUNT", sequelize_1.default.col("Post.category")), "count"]],
                    group: ["Post.category"],
                })];
            case 1:
                categoryCount = _a.sent();
                return [2 /*return*/, categoryCount];
        }
    });
}); };
var getPostsCount = function (_a) {
    var category = _a.category;
    return __awaiter(void 0, void 0, void 0, function () {
        var where, query, _b, data, _;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    where = category === "main" ? "" : "where category=\"".concat(category, "\"");
                    query = "select count(*) as count from Posts ".concat(where);
                    return [4 /*yield*/, sequelize.query(query)];
                case 1:
                    _b = _c.sent(), data = _b[0], _ = _b[1];
                    return [2 /*return*/, data[0].count];
            }
        });
    });
};
var getTopViewsPosts = function () { return __awaiter(void 0, void 0, void 0, function () {
    var posts;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Post.findAll({
                    order: [["views", "DESC"]],
                    limit: 10,
                    attributes: ["id", "title"],
                })];
            case 1:
                posts = _a.sent();
                return [2 /*return*/, posts];
        }
    });
}); };
exports.default = {
    getAllPostsId: getAllPostsId,
    getMainPosts: getMainPosts,
    getCategoryPosts: getCategoryPosts,
    getPostsBySearchKeyWord: getPostsBySearchKeyWord,
    getPostsByTag: getPostsByTag,
    getTopViewsPosts: getTopViewsPosts,
    getCategoryPostsCount: getCategoryPostsCount,
    getPostsCount: getPostsCount,
};
