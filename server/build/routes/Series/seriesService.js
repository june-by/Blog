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
Object.defineProperty(exports, "__esModule", { value: true });
const _database_1 = require("../../database");
const constants_1 = require("../../constants");
const getAllSeries = () => __awaiter(void 0, void 0, void 0, function* () {
    const series = yield _database_1.Series.findAll({
        order: constants_1.ORDER_BY_CREATED_AT,
        include: [{ model: _database_1.Posts, attributes: ["id", "title"] }],
    });
    return series;
});
const getSeriesIdByTitle = ({ title, }) => __awaiter(void 0, void 0, void 0, function* () {
    const series = yield _database_1.Series.findOne({
        where: { title },
    });
    return series === null || series === void 0 ? void 0 : series.id;
});
const getSeriesTitleById = ({ SeriesId: id, }) => __awaiter(void 0, void 0, void 0, function* () {
    const series = yield _database_1.Series.findOne({
        where: { id },
    });
    return series === null || series === void 0 ? void 0 : series.title;
});
const addSeries = (seriesCreationAttribute) => __awaiter(void 0, void 0, void 0, function* () {
    const series = yield _database_1.Series.create(seriesCreationAttribute);
    return series;
});
exports.default = {
    getAllSeries,
    addSeries,
    getSeriesIdByTitle,
    getSeriesTitleById,
};
