"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var comment_1 = __importDefault(require("./comment"));
var post_1 = __importDefault(require("./post"));
var image_1 = __importDefault(require("./image"));
var user_1 = __importDefault(require("./user"));
var tag_1 = __importDefault(require("./tag"));
var visitor_1 = __importDefault(require("./visitor"));
var config_1 = require("../config/config");
var env = process.env.NODE_ENV || "development";
var config = config_1.dbConfig[env];
// : { Comment: any; Image: any; Post: any; User: any; Tag: any; Visitor: any; sequelize: any; Sequelize: any }
var sequelize = new sequelize_1.Sequelize(config.database, config.username, config.password, config);
var db = {
    Comment: (0, comment_1.default)(sequelize, sequelize_1.Sequelize),
    Image: (0, image_1.default)(sequelize, sequelize_1.Sequelize),
    User: (0, user_1.default)(sequelize, sequelize_1.Sequelize),
    Post: (0, post_1.default)(sequelize, sequelize_1.Sequelize),
    Tag: (0, tag_1.default)(sequelize, sequelize_1.Sequelize),
    Visitor: (0, visitor_1.default)(sequelize, sequelize_1.Sequelize),
    sequelize: sequelize,
    Sequelize: sequelize_1.Sequelize,
};
Object.keys(db).forEach(function (modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
exports.default = db;