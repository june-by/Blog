"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = require("./snippet");
const sequelize_1 = require("sequelize");
const sequelize_2 = require("./sequelize");
function initSnippetModel() {
    snippet_1.Snippets.init({
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
        category: {
            type: sequelize_1.DataTypes.STRING(30),
            allowNull: false, //필수
        },
    }, {
        sequelize: sequelize_2.sequelizeConnection,
        tableName: "Snippets",
        timestamps: true,
    });
}
exports.default = initSnippetModel;
