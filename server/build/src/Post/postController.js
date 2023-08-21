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
var tagService_1 = __importDefault(require("../../src/Tag/tagService"));
var postService_1 = __importDefault(require("./postService"));
var clientUrl_1 = __importDefault(require("../../src/constants/clientUrl"));
var axios_1 = __importDefault(require("axios"));
var postsService_1 = __importDefault(require("../../src/Posts/postsService"));
var AddPost = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var tagArr, post, result, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                tagArr = req.body.tagArr;
                return [4 /*yield*/, postService_1.default.createPost(req.body)];
            case 1:
                post = _a.sent();
                if (!(tagArr.length !== 0)) return [3 /*break*/, 4];
                return [4 /*yield*/, tagService_1.default.createTags({ tagArr: tagArr })];
            case 2:
                result = _a.sent();
                return [4 /*yield*/, postService_1.default.addTags({ post: post, result: result })];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4:
                res.send("OK");
                return [3 /*break*/, 6];
            case 5:
                err_1 = _a.sent();
                console.error(err_1);
                next(err_1);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
var deletePost = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var postId, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                postId = req.params.postId;
                return [4 /*yield*/, postService_1.default.deletePost({ postId: postId })];
            case 1:
                _a.sent();
                res.json({ PostId: parseInt(postId) });
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                console.error(err_2);
                next(err_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var updatePost = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var tagArr, postId, post, result, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                tagArr = req.body.tagArr;
                postId = req.params.postId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 8, , 9]);
                return [4 /*yield*/, postService_1.default.updatePost(__assign(__assign({}, req.body), { postId: postId }))];
            case 2:
                _a.sent();
                return [4 /*yield*/, postService_1.default.getPost({ postId: postId })];
            case 3:
                post = _a.sent();
                return [4 /*yield*/, tagService_1.default.createTags({ tagArr: tagArr })];
            case 4:
                result = _a.sent();
                return [4 /*yield*/, postService_1.default.updateTags({ post: post, result: result })];
            case 5:
                _a.sent();
                if (!(process.env.NODE_ENV === "production")) return [3 /*break*/, 7];
                return [4 /*yield*/, axios_1.default.post("".concat(clientUrl_1.default, "/api/revalidate-post?secret=").concat(process.env.SECRET_REVALIDATE_TOKEN), {
                        id: postId,
                    })];
            case 6:
                _a.sent();
                _a.label = 7;
            case 7: return [2 /*return*/, res.json({
                    message: "게시글 수정이 완료되었습니다. 메인화면으로 돌아갑니다",
                })];
            case 8:
                err_3 = _a.sent();
                console.error(err_3);
                next(err_3);
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); };
var getPost = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var postId, mainPost, category, SeriesId, _a, prevPost, nextPost, seriesPosts, err_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                postId = req.params.postId;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, postService_1.default.getFullPost({ postId: postId })];
            case 2:
                mainPost = _b.sent();
                if (!mainPost)
                    return [2 /*return*/, res.status(403).send("존재하지 않는 게시글입니다")];
                category = mainPost.category, SeriesId = mainPost.SeriesId;
                return [4 /*yield*/, Promise.all([
                        postService_1.default.getPrevPost(category, postId),
                        postService_1.default.getNextPost(category, postId),
                        SeriesId
                            ? postsService_1.default.getPostsBySeriesId({
                                seriesId: SeriesId,
                            })
                            : {},
                    ])];
            case 3:
                _a = _b.sent(), prevPost = _a[0], nextPost = _a[1], seriesPosts = _a[2];
                res.status(201).json({
                    mainPost: __assign(__assign({}, mainPost.toJSON()), { seriesPosts: seriesPosts }),
                    prevPost: prevPost,
                    nextPost: nextPost,
                });
                return [3 /*break*/, 5];
            case 4:
                err_4 = _b.sent();
                console.log(err_4);
                next(err_4);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
var getPostViewCount = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var postId, views, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                postId = req.params.postId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, postService_1.default.getViewCount({ postId: postId })];
            case 2:
                views = (_a.sent()).views;
                res.status(201).json(views || 0);
                postService_1.default.addViewCount({ postId: postId, views: views });
                return [3 /*break*/, 4];
            case 3:
                err_5 = _a.sent();
                console.log(err_5);
                next(err_5);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var postController = {
    getPost: getPost,
    updatePost: updatePost,
    AddPost: AddPost,
    deletePost: deletePost,
    getPostViewCount: getPostViewCount,
};
exports.default = postController;
