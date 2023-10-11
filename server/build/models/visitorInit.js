"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const visitor_1 = require("./visitor");
const sequelize_2 = require("./sequelize");
function initVisitorModel() {
    visitor_1.Visitors.init({
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
        sequelize: sequelize_2.sequelizeConnection,
        tableName: "Visitors",
        timestamps: true,
    });
}
exports.default = initVisitorModel;
