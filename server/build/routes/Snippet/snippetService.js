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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _database_1 = require("../../database");
const getAllSnippetsId = () => __awaiter(void 0, void 0, void 0, function* () {
    const snippets = yield _database_1.Snippets.findAll({
        attributes: ["id"],
    });
    return snippets;
});
const getAllSnippets = () => __awaiter(void 0, void 0, void 0, function* () {
    const snippets = yield _database_1.Snippets.findAll({
        attributes: {
            exclude: ["content"],
        },
    });
    return snippets;
});
const addSnippet = (snippetCreationAttribute) => __awaiter(void 0, void 0, void 0, function* () {
    const snippet = yield _database_1.Snippets.create(snippetCreationAttribute);
    return snippet;
});
const updateSnippet = (_a) => __awaiter(void 0, void 0, void 0, function* () {
    var { id } = _a, data = __rest(_a, ["id"]);
    yield _database_1.Snippets.update(Object.assign({}, data), { where: { id } });
});
const getSnippet = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const snippet = yield _database_1.Snippets.findOne({ where: { id } });
    return snippet;
});
const deleteSnippet = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    yield _database_1.Snippets.destroy({ where: { id } });
});
exports.default = {
    getAllSnippetsId,
    getAllSnippets,
    addSnippet,
    getSnippet,
    updateSnippet,
    deleteSnippet,
};
