import { Tags } from "./tag";
import { DataTypes } from "sequelize";
import { sequelizeConnection } from "./sequelize";

function initTagModel() {
  Tags.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize: sequelizeConnection,
      tableName: "Tags",
      timestamps: true,
    }
  );
}

export default initTagModel;
