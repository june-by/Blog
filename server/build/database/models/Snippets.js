"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSnippets = exports.Snippets = void 0;
const sequelize_1 = require("sequelize");
const SequelizeConnection_1 = require("../SequelizeConnection");
class Snippets extends sequelize_1.Model {
}
exports.Snippets = Snippets;
const initSnippets = () => {
    Snippets.init({
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
        sequelize: SequelizeConnection_1.sequelizeConnection,
        tableName: "Snippets",
        timestamps: true,
    });
};
exports.initSnippets = initSnippets;
