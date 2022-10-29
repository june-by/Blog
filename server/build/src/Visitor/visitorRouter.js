"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var visitorController_1 = __importDefault(require("./visitorController"));
var router = express_1.default.Router();
router.get("/", visitorController_1.default.getVisitor);
router.post("/", visitorController_1.default.addVisitor);
exports.default = router;
