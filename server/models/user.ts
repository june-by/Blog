import { DataTypes, Model, Sequelize } from "sequelize";
import { ModelType } from "./types";
import { UserAttribute, UserCreationAttribute } from "types/user";
import { sequelizeInstance } from "models";

export class Users extends Model<UserAttribute, UserCreationAttribute> {
  declare id: number;
  declare email?: string;
  declare nickname: string;
  declare password: string;
  declare provider?: string;
}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
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
    provider: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    tableName: "Users",
  }
);

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
      provider: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );

  return User;
};
