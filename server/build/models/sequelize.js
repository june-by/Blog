"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelizeConnection = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../config/config");
const post_1 = require("./post");
const series_1 = require("./series");
const tag_1 = require("./tag");
const postInit_1 = __importDefault(require("./postInit"));
const seriesInit_1 = __importDefault(require("./seriesInit"));
const snippetInit_1 = __importDefault(require("./snippetInit"));
const tagInit_1 = __importDefault(require("./tagInit"));
const userInit_1 = __importDefault(require("./userInit"));
const env = process.env.NODE_ENV || "development";
const config = config_1.dbConfig[env];
exports.sequelizeConnection = new sequelize_1.Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
});
function initModel() {
    (0, postInit_1.default)();
    (0, seriesInit_1.default)();
    (0, snippetInit_1.default)();
    (0, tagInit_1.default)();
    (0, userInit_1.default)();
    post_1.Posts.belongsTo(series_1.Series);
    series_1.Series.hasMany(post_1.Posts);
    post_1.Posts.belongsToMany(tag_1.Tags, { through: "PostHashtag" });
    tag_1.Tags.belongsToMany(post_1.Posts, { through: "PostHashtag" });
}
initModel();
