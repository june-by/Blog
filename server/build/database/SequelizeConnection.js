"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelizeConnection = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../src/config/config");
const env = process.env.NODE_ENV || "development";
const config = config_1.dbConfig[env];
exports.sequelizeConnection = new sequelize_1.Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
});
