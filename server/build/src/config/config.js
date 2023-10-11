"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.dbConfig = {
    development: {
        username: "root",
        password: process.env.DB_PASSWORD,
        database: "Byjuun.com",
        host: "127.0.0.1",
        dialect: "mysql",
    },
    test: {
        username: "root",
        password: process.env.DB_PASSWORD,
        database: "database_test",
        host: "127.0.0.1",
        dialect: "mysql",
    },
    production: {
        username: "root",
        password: process.env.DB_PASSWORD,
        database: "Byjuun.com",
        host: "127.0.0.1",
        dialect: "mysql",
    },
};
