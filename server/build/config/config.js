"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.dbConfig = {
    development: {
        username: "root",
        password: "bj@980613",
        database: "Byjuun.com",
        host: "127.0.0.1",
        dialect: "mysql",
    },
    test: {
        username: "root",
        password: "bj@980613",
        database: "database_test",
        host: "127.0.0.1",
        dialect: "mysql",
    },
    production: {
        username: "root",
        password: "bj@980613",
        database: "Byjuun.com",
        host: "127.0.0.1",
        dialect: "mysql",
    },
};
