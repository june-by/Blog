"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING(30),
            allowNull: true,
            unique: true, // 고유한 값
        },
        nickname: {
            type: DataTypes.STRING(30),
            allowNull: false, //필수
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
    }, {
        charset: "utf8",
        collate: "utf8_general_ci",
    });
    User.associate = function (db) {
        db.User.hasMany(db.Comment);
    };
    return User;
});
