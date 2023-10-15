"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const snippetController_1 = __importDefault(require("./snippetController"));
const _middleware_1 = require("../../middleWare");
const router = express_1.default.Router();
router.get("/load/id", snippetController_1.default.getAllSnippetsId);
router.get("/load/all", (0, _middleware_1.cacheMiddleware)(), snippetController_1.default.getAllSnippets);
router.post("/", _middleware_1.isAdmin, (0, _middleware_1.cacheClearMiddleWare)("snippet"), snippetController_1.default.addSnippet);
router.get("/load/:snippetId", snippetController_1.default.getSnippet);
router.patch("/:snippetId", _middleware_1.isAdmin, (0, _middleware_1.cacheClearMiddleWare)("snippet"), snippetController_1.default.updateSnippet);
router.delete("/:snippetId", _middleware_1.isAdmin, (0, _middleware_1.cacheClearMiddleWare)("snippet"), snippetController_1.default.deleteSnippet);
exports.default = router;
