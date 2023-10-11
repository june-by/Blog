"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initTags = exports.Tags = void 0;
const SequelizeConnection_1 = require("../SequelizeConnection");
const sequelize_1 = require("sequelize");
class Tags extends sequelize_1.Model {
}
exports.Tags = Tags;
const initTags = () => {
    Tags.init({
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
        sequelize: SequelizeConnection_1.sequelizeConnection,
        tableName: "Tags",
        timestamps: true,
    });
};
exports.initTags = initTags;
