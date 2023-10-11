import { DataTypes } from "sequelize";
import { Series } from "./series";
import { sequelizeConnection } from "./sequelize";

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
      sequelize: sequelizeConnection,
      tableName: "Series",
      timestamps: true,
    }
  );
}

export default initSerieModel;
