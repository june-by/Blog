"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const snippetController_1 = __importDefault(require("./snippetController"));
const isAdmin_1 = require("../../middleWare/isAdmin");
const router = express_1.default.Router();
router.get("/load/id", snippetController_1.default.getAllSnippetsId);
router.get("/load/all", snippetController_1.default.getAllSnippets);
router.post("/", isAdmin_1.isAdmin, snippetController_1.default.addSnippet);
router.get("/load/:snippetId", snippetController_1.default.getSnippet);
router.patch("/:snippetId", isAdmin_1.isAdmin, snippetController_1.default.updateSnippet);
router.delete("/:snippetId", isAdmin_1.isAdmin, snippetController_1.default.deleteSnippet);
exports.default = router;
