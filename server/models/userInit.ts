import { Users } from "./user";
import { DataTypes } from "sequelize";
import { sequelizeInstance } from "./sequelize";

function initUserModel() {
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
      timestamps: true,
    }
  );
}

export default initUserModel;
