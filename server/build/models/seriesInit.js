"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const series_1 = require("./series");
const sequelize_2 = require("./sequelize");
function initSerieModel() {
    series_1.Series.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false, //필수
        },
        shortDescription: {
            type: sequelize_1.DataTypes.STRING(200),
            allowNull: true,
        },
        thumbNailUrl: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: true, //필수
        },
    }, {
        sequelize: sequelize_2.sequelizeConnection,
        tableName: "Series",
        timestamps: true,
    });
}
exports.default = initSerieModel;
