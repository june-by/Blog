"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postRouter_1 = __importDefault(require("./Post/postRouter"));
const postsRouter_1 = __importDefault(require("./Posts/postsRouter"));
const seriesRouter_1 = __importDefault(require("./Series/seriesRouter"));
const snippetRouter_1 = __importDefault(require("./Snippet/snippetRouter"));
const tagRouter_1 = __importDefault(require("./Tag/tagRouter"));
const userRouter_1 = __importDefault(require("./User/userRouter"));
const visitorRouter_1 = __importDefault(require("./Visitor/visitorRouter"));
const ROUTER_LIST = [
    { url: "/post", router: postRouter_1.default },
    { url: "/posts", router: postsRouter_1.default },
    { url: "/user", router: userRouter_1.default },
    { url: "/visitor", router: visitorRouter_1.default },
    { url: "/tag", router: tagRouter_1.default },
    { url: "/series", router: seriesRouter_1.default },
    { url: "/snippet", router: snippetRouter_1.default },
];
exports.default = ROUTER_LIST;
