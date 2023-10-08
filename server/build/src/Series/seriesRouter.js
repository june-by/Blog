"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const seriesController_1 = __importDefault(require("./seriesController"));
const router = express_1.default.Router();
router.get("/", seriesController_1.default.getAllSeries);
router.post("/", seriesController_1.default.addSeries);
exports.default = router;
