"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const visitorController_1 = __importDefault(require("./visitorController"));
const router = express_1.default.Router();
router.get("/", visitorController_1.default.getVisitor);
exports.default = router;
