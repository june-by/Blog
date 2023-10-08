"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = require("./post");
const sequelize_1 = require("sequelize");
const sequelize_2 = require("./sequelize");
function initPostModel() {
    post_1.Posts.init({
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
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: true, //필수
        },
        views: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        isPublic: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        SeriesId: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
        },
    }, {
        sequelize: sequelize_2.sequelizeConnection,
        tableName: "Posts",
        timestamps: true,
    });
}
exports.default = initPostModel;
