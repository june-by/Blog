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
const postsService_1 = __importDefault(require("./postsService"));
const seriesService_1 = __importDefault(require("../src/Series/seriesService"));
const getAllPostsId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postsId = yield postsService_1.default.getAllPostsId();
        return res.status(200).json(postsId);
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});
const getMainPosts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { page } = req.params;
    try {
        const posts = yield postsService_1.default.getMainPosts({ page });
        return res.status(200).json(posts);
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});
const getCategoryPosts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, category } = req.params;
    try {
        const posts = yield postsService_1.default.getCategoryPosts({ page, category });
        return res.status(200).json(posts);
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});
const getSeriesPosts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, seriesTitle: title } = req.params;
    try {
        const SeriesId = yield seriesService_1.default.getSeriesIdByTitle({ title });
        const posts = yield postsService_1.default.getPostsBySeriesId({ page, SeriesId });
        return res.status(200).json(posts);
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});
const getCategoryPostsCount = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoryCount = yield postsService_1.default.getCategoryPostsCount();
        res.status(200).json(categoryCount);
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});
const getPostsBySearchKeyWord = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, keyword } = req.params;
    try {
        const posts = yield postsService_1.default.getPostsBySearchKeyWord({ page, keyword });
        res.status(200).json(posts);
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});
const getPostsByTag = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, keyword } = req.params;
    try {
        const posts = yield postsService_1.default.getPostsByTag({ page, keyword });
        res.status(200).json(posts);
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});
const getPostsLength = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { category } = req.params;
    try {
        const length = yield postsService_1.default.getPostsCount({ category });
        res.status(200).json({ length });
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});
const getAllPosts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield postsService_1.default.getAllPosts();
        return res.status(200).json(posts);
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});
exports.default = {
    getAllPostsId,
    getMainPosts,
    getCategoryPosts,
    getSeriesPosts,
    getPostsLength,
    getCategoryPostsCount,
    getPostsBySearchKeyWord,
    getPostsByTag,
    getAllPosts,
};
