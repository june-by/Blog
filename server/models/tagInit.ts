import { Tags } from "./tag";
import { DataTypes } from "sequelize";
import { sequelizeInstance } from "./sequelize";

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
      sequelize: sequelizeInstance,
      tableName: "Tags",
    }
  );
}

export default initTagModel;
