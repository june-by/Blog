"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initPostHashTag = exports.PostHashtag = void 0;
const sequelize_1 = require("sequelize");
const SequelizeConnection_1 = require("../SequelizeConnection");
exports.PostHashtag = SequelizeConnection_1.sequelizeConnection.define("PostHashtag", {
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
});
const initPostHashTag = () => {
    exports.PostHashtag.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
    }, {
        sequelize: SequelizeConnection_1.sequelizeConnection,
        tableName: "PostHashtag",
        timestamps: true,
    });
};
exports.initPostHashTag = initPostHashTag;
