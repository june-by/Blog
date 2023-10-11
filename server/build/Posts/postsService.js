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
const database_1 = require("../src/database");
const sequelize_1 = __importDefault(require("sequelize"));
const constants_1 = require("../src/constants");
const Op = sequelize_1.default.Op;
const POSTS_PER_PAGE = 20;
const DEFAULT_EXCLUDE_COLUMN = ["content", "updatedAt"];
const getAllPostsId = () => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield database_1.Posts.findAll({
        attributes: ["id"],
    });
    return posts;
});
const getMainPosts = ({ page }) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield database_1.Posts.findAll({
        order: constants_1.ORDER_BY_CREATED_AT,
        limit: POSTS_PER_PAGE,
        offset: (Number(page) - 1) * POSTS_PER_PAGE,
        attributes: {
            exclude: DEFAULT_EXCLUDE_COLUMN,
        },
        include: [
            {
                model: database_1.Tags,
                attributes: ["id", "content"],
            },
        ],
    });
    return posts;
});
const getCategoryPosts = ({ category, page, }) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield database_1.Posts.findAll({
        where: { category: category },
        order: constants_1.ORDER_BY_CREATED_AT,
        limit: POSTS_PER_PAGE,
        offset: (Number(page) - 1) * POSTS_PER_PAGE,
        attributes: {
            exclude: DEFAULT_EXCLUDE_COLUMN,
        },
        include: [
            {
                model: database_1.Tags,
                attributes: ["id", "content"],
            },
        ],
    });
    return posts;
});
const getPostsBySeriesId = ({ page, SeriesId, }) => __awaiter(void 0, void 0, void 0, function* () {
    const isPagedRequest = !!page;
    const fieldForPagedQuery = isPagedRequest
        ? {
            order: constants_1.ORDER_BY_CREATED_AT,
            limit: POSTS_PER_PAGE,
            offset: (Number(page) - 1) * POSTS_PER_PAGE,
        }
        : {};
    const posts = yield database_1.Posts.findAll(Object.assign(Object.assign({ where: { SeriesId } }, fieldForPagedQuery), { attributes: {
            exclude: DEFAULT_EXCLUDE_COLUMN,
        }, include: [
            {
                model: database_1.Tags,
                attributes: ["id", "content"],
            },
        ] }));
    return posts;
});
const getPostsBySearchKeyWord = ({ page, keyword, }) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield database_1.Posts.findAll({
        where: {
            title: {
                [Op.like]: "%" + decodeURIComponent(keyword) + "%",
            },
        },
        order: constants_1.ORDER_BY_CREATED_AT,
        limit: POSTS_PER_PAGE,
        offset: (Number(page) - 1) * POSTS_PER_PAGE,
        attributes: {
            exclude: DEFAULT_EXCLUDE_COLUMN,
        },
        include: [
            {
                model: database_1.Tags,
                attributes: ["id", "content"],
            },
        ],
    });
    return posts;
});
const getPostsByTag = ({ page, keyword, }) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield database_1.Posts.findAll({
        attributes: {
            exclude: DEFAULT_EXCLUDE_COLUMN,
        },
        order: constants_1.ORDER_BY_CREATED_AT,
        limit: POSTS_PER_PAGE,
        offset: (Number(page) - 1) * POSTS_PER_PAGE,
        include: [
            {
                model: database_1.Tags,
                where: { content: keyword },
                attributes: ["id", "content"],
            },
        ],
    });
    return posts;
});
const getCategoryPostsCount = () => __awaiter(void 0, void 0, void 0, function* () {
    const categoryCount = yield database_1.Posts.findAll({
        attributes: [
            "category",
            [
                database_1.sequelizeConnection.fn("COUNT", sequelize_1.default.col("Posts.category")),
                "count",
            ],
        ],
        group: ["Posts.category"],
    });
    return categoryCount;
});
const getPostsCount = ({ category }) => __awaiter(void 0, void 0, void 0, function* () {
    const where = category === "main" ? "" : `where category="${category}"`;
    const query = `select count(*) as count from Posts ${where}`;
    const [data, _] = yield database_1.sequelizeConnection.query(query);
    return data[0].count;
});
const getAllPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield database_1.Posts.findAll({
        attributes: ["id", "title", "createdAt"],
        order: constants_1.ORDER_BY_CREATED_AT,
    });
    return posts;
});
exports.default = {
    getAllPostsId,
    getMainPosts,
    getCategoryPosts,
    getPostsBySearchKeyWord,
    getPostsBySeriesId,
    getPostsByTag,
    getCategoryPostsCount,
    getPostsCount,
    getAllPosts,
};
