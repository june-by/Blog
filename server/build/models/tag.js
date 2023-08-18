"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (sequelize, DataTypes) {
    var Tag = sequelize.define("Tag", {
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
    });
    Tag.associate = function (db) {
        db.Tag.belongsToMany(db.Post, { through: "PostHashtag" });
    };
    return Tag;
});
