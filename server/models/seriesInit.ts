import { DataTypes } from "sequelize";
import { Series } from "./series";
import { sequelizeInstance } from "./sequelize";

function initSerieModel() {
  Series.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.TEXT,
        allowNull: false, //필수
      },
      shortDescription: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      thumbNailUrl: {
        type: DataTypes.STRING(100),
        allowNull: true, //필수
      },
    },
    {
      sequelize: sequelizeInstance,
      tableName: "Series",
    }
  );
}

export default initSerieModel;
