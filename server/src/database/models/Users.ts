import { sequelizeConnection } from "../SequelizeConnection";

import { Model, DataTypes } from "sequelize";
import { UserAttribute, UserCreationAttribute } from "@types";

export class Users extends Model<UserAttribute, UserCreationAttribute> {
  public id!: number;
  public email?: string;
  public nickname!: string;
  public password!: string;
  public provider?: string;
}
export const initUsers = () => {
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
      sequelize: sequelizeConnection,
      tableName: "Users",
      timestamps: true,
    }
  );
};
