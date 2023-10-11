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
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../src/database");
const getPost = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield database_1.Posts.findOne({ where: { id } });
    return post;
});
const getFullPost = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const fullPost = yield database_1.Posts.findOne({
        where: { id },
        attributes: {
            exclude: ["updatedAt"],
        },
        include: [
            {
                model: database_1.Tags,
                attributes: ["id", "content"],
            },
        ],
    });
    return fullPost;
});
const createPost = (postCreationAttributes) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield database_1.Posts.create(Object.assign(Object.assign({}, postCreationAttributes), { views: 0 }));
    return post;
});
const updatePost = ({ title, category, content, thumbNailUrl, shortDescription, SeriesId, id, isPublic, }) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.Posts.update({
        title,
        category,
        content,
        thumbNailUrl,
        isPublic: isPublic || 0,
        shortDescription,
        SeriesId,
    }, {
        where: { id },
    });
});
const deletePost = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.Posts.destroy({
        where: { id },
    });
});
const addTags = ({ post, tags }) => __awaiter(void 0, void 0, void 0, function* () {
    yield post.addTags(tags);
});
const updateTags = ({ post, tags }) => __awaiter(void 0, void 0, void 0, function* () {
    yield post.setTags(tags);
});
const addViewCount = ({ id, views, }) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.Posts.update({
        views: views + 1,
    }, {
        where: { id },
    });
});
const getViewCount = ({ id, }) => __awaiter(void 0, void 0, void 0, function* () {
    const viewCount = yield database_1.Posts.findOne({
        where: { id },
        attributes: ["views"],
    });
    return viewCount;
});
const getPrevPost = ({ category, id, }) => __awaiter(void 0, void 0, void 0, function* () {
    const query = "select * from (select id, LAG(createdAt) OVER (ORDER BY id) OtherCreatedAt, LAG(title) OVER (ORDER BY id) OtherTitle,LAG(id) OVER (ORDER BY id) OtherId  from Posts where category=?)A where id=?;";
    const [prev, _] = yield database_1.sequelizeConnection.query(query, {
        replacements: [category, id],
    });
    return prev[0];
});
const getNextPost = ({ category, id, }) => __awaiter(void 0, void 0, void 0, function* () {
    const query = "select * from (select id, LEAD(createdAt) OVER (ORDER BY id) OtherCreatedAt, LEAD(title) OVER (ORDER BY id) OtherTitle,LEAD(id) OVER (ORDER BY id) OtherId  from Posts where category=?)A where id=?;";
    const [next, _] = yield database_1.sequelizeConnection.query(query, {
        replacements: [category, id],
    });
    return next[0];
});
const postService = {
    getPost,
    getFullPost,
    getPrevPost,
    getNextPost,
    createPost,
    updatePost,
    addTags,
    updateTags,
    deletePost,
    addViewCount,
    getViewCount,
};
exports.default = postService;
