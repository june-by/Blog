"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initUsers = exports.Users = void 0;
const SequelizeConnection_1 = require("../SequelizeConnection");
const sequelize_1 = require("sequelize");
class Users extends sequelize_1.Model {
}
exports.Users = Users;
const initUsers = () => {
    Users.init({
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
        sequelize: SequelizeConnection_1.sequelizeConnection,
        tableName: "Users",
        timestamps: true,
    });
};
exports.initUsers = initUsers;
