"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const sequelize_1 = require("sequelize");
const sequelize_2 = require("./sequelize");
function initUserModel() {
    user_1.Users.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: sequelize_1.DataTypes.STRING(30),
            allowNull: true,
            unique: true, // 고유한 값
        },
        nickname: {
            type: sequelize_1.DataTypes.STRING(30),
            allowNull: false, //필수
        },
        password: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: true,
        },
        provider: {
            type: sequelize_1.DataTypes.STRING(20),
            allowNull: true,
        },
    }, {
        sequelize: sequelize_2.sequelizeConnection,
        tableName: "Users",
        timestamps: true,
    });
}
exports.default = initUserModel;
