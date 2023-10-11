"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tagController_1 = __importDefault(require("./tagController"));
const router = express_1.default.Router();
router.get("/", tagController_1.default.getAllTags);
exports.default = router;
