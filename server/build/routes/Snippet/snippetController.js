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
const snippetService_1 = __importDefault(require("./snippetService"));
const _constants_1 = require("../../constants");
const getAllSnippetsId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const snippetsId = yield snippetService_1.default.getAllSnippetsId();
        return res.status(200).json(snippetsId);
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});
const getAllSnippets = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const snippets = yield snippetService_1.default.getAllSnippets();
        res.status(200).json(snippets);
    }
    catch (err) {
        console.log(err);
        next(err);
    }
});
const addSnippet = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const snippet = yield snippetService_1.default.addSnippet(req.body);
        return res.status(200).json(snippet);
    }
    catch (err) {
        console.log(err);
        next(err);
    }
});
const updateSnippet = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { snippetId: id } = req.params;
    try {
        yield snippetService_1.default.updateSnippet(Object.assign(Object.assign({}, req.body), { id }));
        return res.json({
            message: _constants_1.MESSAGE.EDIT_POST_SUCCESS,
        });
    }
    catch (err) {
        console.log(err);
        next(err);
    }
});
const getSnippet = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.snippetId);
        const snippet = yield snippetService_1.default.getSnippet({ id });
        return res.status(200).json(snippet);
    }
    catch (err) {
        console.log(err);
        next(err);
    }
});
const deleteSnippet = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.snippetId);
        yield snippetService_1.default.deleteSnippet({ id });
        return res.status(200).json({ snippetId: id });
    }
    catch (err) {
        console.log(err);
        next(err);
    }
});
exports.default = {
    getAllSnippets,
    addSnippet,
    getSnippet,
    updateSnippet,
    getAllSnippetsId,
    deleteSnippet,
};
