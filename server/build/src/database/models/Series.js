"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSeries = exports.Series = void 0;
const sequelize_1 = require("sequelize");
const SequelizeConnection_1 = require("../SequelizeConnection");
class Series extends sequelize_1.Model {
}
exports.Series = Series;
const initSeries = () => {
    Series.init({
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
        sequelize: SequelizeConnection_1.sequelizeConnection,
        tableName: "Series",
        timestamps: true,
    });
};
exports.initSeries = initSeries;
