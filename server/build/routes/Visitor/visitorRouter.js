"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const visitorController_1 = __importDefault(require("./visitorController"));
const _middleware_1 = require("../../middleWare");
const router = express_1.default.Router();
router.get("/", (0, _middleware_1.cacheMiddleware)(), visitorController_1.default.getVisitor);
router.post("/", (0, _middleware_1.cacheClearMiddleWare)("visitor"), visitorController_1.default.addVisitor);
exports.default = router;
