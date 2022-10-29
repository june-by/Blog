import { Sequelize } from "sequelize";
import { ModelType } from "./types";

export default (sequelize: Sequelize, DataTypes: any) => {
  const User: ModelType = sequelize.define(
    "User",
    {
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
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );

  User.associate = (db) => {
    db.User.hasMany(db.Comment);
  };
  return User;
};
