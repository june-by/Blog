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
const models_1 = require("../../models");
const createTags = ({ tagArr }) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Promise.all(tagArr.map((tag) => models_1.Tags.findOrCreate({
        where: { content: tag.toLowerCase() },
    })));
    return result.map(([data]) => data);
});
const getAllTags = () => __awaiter(void 0, void 0, void 0, function* () {
    const tags = yield models_1.Tags.findAll({
        attributes: {
            include: ["content"],
        },
        include: [
            {
                model: models_1.Posts,
                attributes: ["id"],
            },
        ],
    });
    return tags;
});
exports.default = {
    createTags,
    getAllTags,
};
