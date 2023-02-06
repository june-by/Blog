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
var Post = models_1.default.Post, Comment = models_1.default.Comment, User = models_1.default.User, Tag = models_1.default.Tag, sequelize = models_1.default.sequelize;
var getPost = function (_a) {
    var postId = _a.postId;
    return __awaiter(void 0, void 0, void 0, function () {
        var post;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, Post.findOne({ where: { id: postId } })];
                case 1:
                    post = _b.sent();
                    return [2 /*return*/, post];
            }
        });
    });
};
var getFullPost = function (_a) {
    var postId = _a.postId;
    return __awaiter(void 0, void 0, void 0, function () {
        var fullPost;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, Post.findOne({
                        where: { id: postId },
                        attributes: ["category", "content", "createdAt", "id", "title", "thumbNailUrl", "views", "isPublic"],
                        include: [
                            {
                                model: Comment,
                                attributes: ["content", "createdAt"],
                                include: [
                                    {
                                        model: User,
                                        attributes: ["nickname"],
                                    },
                                ],
                            },
                            {
                                model: Tag,
                                attributes: ["id", "content"],
                            },
                        ],
                    })];
                case 1:
                    fullPost = _b.sent();
                    return [2 /*return*/, fullPost];
            }
        });
    });
};
var createPost = function (_a) {
    var title = _a.title, category = _a.category, content = _a.content, thumbNailUrl = _a.thumbNailUrl;
    return __awaiter(void 0, void 0, void 0, function () {
        var post;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, Post.create({
                        title: title,
                        category: category,
                        content: content,
                        thumbNailUrl: thumbNailUrl,
                        views: 0,
                    })];
                case 1:
                    post = _b.sent();
                    return [2 /*return*/, post];
            }
        });
    });
};
var updatePost = function (_a) {
    var title = _a.title, category = _a.category, content = _a.content, thumbNailUrl = _a.thumbNailUrl, postId = _a.postId;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, Post.update({
                        title: title,
                        category: category,
                        content: content,
                        thumbNailUrl: thumbNailUrl,
                    }, {
                        where: { id: postId },
                    })];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
};
var deletePost = function (_a) {
    var postId = _a.postId;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, Post.destroy({
                        where: { id: postId },
                    })];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
};
var addTags = function (_a) {
    var post = _a.post, result = _a.result;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, post.addTags(result.map(function (v) { return v[0]; }))];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
};
var updateTags = function (_a) {
    var post = _a.post, result = _a.result;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, post.setTags(result.map(function (v) { return v[0]; }))];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
};
var isPostExists = function (_a) {
    var postId = _a.postId;
    return __awaiter(void 0, void 0, void 0, function () {
        var post;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, Post.findOne({
                        //게시글 존재하는지 확인
                        where: { id: postId },
                    })];
                case 1:
                    post = _b.sent();
                    return [2 /*return*/, post];
            }
        });
    });
};
var addViewCount = function (_a) {
    var postId = _a.postId, views = _a.views;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, Post.update({
                        views: views + 1,
                    }, {
                        where: { id: postId },
                    })];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
};
var getPrevPost = function (category, id) { return __awaiter(void 0, void 0, void 0, function () {
    var query, _a, prev, _;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                query = "select * from (select id, LAG(createdAt) OVER (ORDER BY id) OtherCreatedAt, LAG(title) OVER (ORDER BY id) OtherTitle,LAG(id) OVER (ORDER BY id) OtherId  from Posts where category=?)A where id=?;";
                return [4 /*yield*/, sequelize.query(query, {
                        replacements: [category, id],
                    })];
            case 1:
                _a = _b.sent(), prev = _a[0], _ = _a[1];
                return [2 /*return*/, prev[0]];
        }
    });
}); };
var getNextPost = function (category, id) { return __awaiter(void 0, void 0, void 0, function () {
    var query, _a, next, _;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                query = "select * from (select id, LEAD(createdAt) OVER (ORDER BY id) OtherCreatedAt, LEAD(title) OVER (ORDER BY id) OtherTitle,LEAD(id) OVER (ORDER BY id) OtherId  from Posts where category=?)A where id=?;";
                return [4 /*yield*/, sequelize.query(query, {
                        replacements: [category, id],
                    })];
            case 1:
                _a = _b.sent(), next = _a[0], _ = _a[1];
                return [2 /*return*/, next[0]];
        }
    });
}); };
var postService = {
    getPost: getPost,
    getFullPost: getFullPost,
    getPrevPost: getPrevPost,
    getNextPost: getNextPost,
    createPost: createPost,
    updatePost: updatePost,
    addTags: addTags,
    updateTags: updateTags,
    deletePost: deletePost,
    addViewCount: addViewCount,
    isPostExists: isPostExists,
};
exports.default = postService;
