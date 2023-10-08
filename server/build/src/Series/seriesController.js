"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const seriesService_1 = __importDefault(require("./seriesService"));
const getAllSeries = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const series = yield seriesService_1.default.getAllSeries();
        return res.status(200).json(series);
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});
const addSeries = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, shortDescription, thumbNailUrl } = req.body;
        const series = yield seriesService_1.default.addSeries({
            title,
            shortDescription,
            thumbNailUrl,
        });
        return res.status(200).json(series);
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});
exports.default = {
    getAllSeries,
    addSeries,
};
