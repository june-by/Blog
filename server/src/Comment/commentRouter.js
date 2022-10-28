"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var commentController_1 = __importDefault(require("./commentController"));
var router = express_1.default.Router();
router.get("/recent", commentController_1.default.getRecentComment);
exports.default = router;
