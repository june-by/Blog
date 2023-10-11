"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initVisitors = exports.Visitors = void 0;
const SequelizeConnection_1 = require("../SequelizeConnection");
const sequelize_1 = require("sequelize");
class Visitors extends sequelize_1.Model {
}
exports.Visitors = Visitors;
const initVisitors = () => {
    Visitors.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        date: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        sequelize: SequelizeConnection_1.sequelizeConnection,
        tableName: "Visitors",
        timestamps: true,
    });
};
exports.initVisitors = initVisitors;
