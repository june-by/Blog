"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initPosts = exports.Posts = void 0;
const sequelize_1 = require("sequelize");
const SequelizeConnection_1 = require("../SequelizeConnection");
class Posts extends sequelize_1.Model {
}
exports.Posts = Posts;
const initPosts = () => {
    Posts.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false, //필수
        },
        content: {
            type: sequelize_1.DataTypes.TEXT("long"),
            allowNull: false,
        },
        shortDescription: {
            type: sequelize_1.DataTypes.STRING(200),
            allowNull: true,
        },
        category: {
            type: sequelize_1.DataTypes.STRING(30),
            allowNull: false, //필수
        },
        thumbNailUrl: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true, //필수
        },
        views: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        isPublic: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
        },
        SeriesId: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
        },
    }, {
        sequelize: SequelizeConnection_1.sequelizeConnection,
        tableName: "Posts",
        timestamps: true,
    });
};
exports.initPosts = initPosts;
