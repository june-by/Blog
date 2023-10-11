"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tag_1 = require("./tag");
const sequelize_1 = require("sequelize");
const sequelize_2 = require("./sequelize");
function initTagModel() {
    tag_1.Tags.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        content: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        sequelize: sequelize_2.sequelizeConnection,
        tableName: "Tags",
        timestamps: true,
    });
}
exports.default = initTagModel;
