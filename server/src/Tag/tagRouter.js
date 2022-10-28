"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var tagController_1 = __importDefault(require("./tagController"));
var router = express_1.default.Router();
router.get("/recent", tagController_1.default.getRecentTags);
exports.default = router;
