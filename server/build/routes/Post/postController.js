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
const tagService_1 = __importDefault(require("../Tag/tagService"));
const postService_1 = __importDefault(require("./postService"));
const constants_1 = require("../../constants");
const axios_1 = __importDefault(require("axios"));
const postsService_1 = __importDefault(require("../Posts/postsService"));
const seriesService_1 = __importDefault(require("../Series/seriesService"));
const AddPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { tagArr } = req.body;
        const post = yield postService_1.default.createPost(req.body);
        if (tagArr.length !== 0) {
            const tags = yield tagService_1.default.createTags({ tagArr });
            yield postService_1.default.addTags({ post, tags });
        }
        res.send(constants_1.MESSAGE.ADD_POST_SUCCESS);
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});
const deletePost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.postId);
        yield postService_1.default.deletePost({ id });
        res.json({ PostId: id });
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});
const updatePost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { tagArr } = req.body;
    const id = Number(req.params.postId);
    try {
        yield postService_1.default.updatePost(Object.assign(Object.assign({}, req.body), { id }));
        const post = yield postService_1.default.getPost({ id });
        if (!post)
            return res.status(403).send(constants_1.MESSAGE.NO_POST);
        const tags = yield tagService_1.default.createTags({ tagArr });
        yield postService_1.default.updateTags({ post, tags });
        if (process.env.NODE_ENV === "production") {
            yield axios_1.default.post(`${constants_1.CLIENT_URL}/api/revalidate-post?secret=${process.env.SECRET_REVALIDATE_TOKEN}`, {
                id,
            });
        }
        return res.json({
            message: constants_1.MESSAGE.EDIT_POST_SUCCESS,
        });
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});
const getPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.postId);
    try {
        const mainPost = yield postService_1.default.getFullPost({ id });
        if (!mainPost)
            return res.status(403).send(constants_1.MESSAGE.NO_POST);
        const { category, SeriesId } = mainPost;
        const [prevPost, nextPost, seriesPosts, seriesTitle] = yield Promise.all([
            postService_1.default.getPrevPost({ category, id }),
            postService_1.default.getNextPost({ category, id }),
            SeriesId ? postsService_1.default.getPostsBySeriesId({ SeriesId }) : {},
            SeriesId ? seriesService_1.default.getSeriesTitleById({ SeriesId }) : {},
        ]);
        res.status(201).json({
            mainPost: Object.assign(Object.assign({}, mainPost.toJSON()), { seriesPosts, seriesTitle }),
            prevPost,
            nextPost,
        });
    }
    catch (err) {
        console.log(err);
        next(err);
    }
});
const getPostViewCount = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.postId);
    try {
        const { views } = yield postService_1.default.getViewCount({ id });
        res.status(201).json(views || 0);
        postService_1.default.addViewCount({ id, views });
    }
    catch (err) {
        console.log(err);
        next(err);
    }
});
const postController = {
    getPost,
    updatePost,
    AddPost,
    deletePost,
    getPostViewCount,
};
exports.default = postController;
