import { DataTypes } from "sequelize";
import { Visitors } from "./visitor";
import { sequelizeInstance } from "./sequelize";

function initVisitorModel() {
  Visitors.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      date: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize: sequelizeInstance,
      tableName: "Visitors",
      timestamps: true,
    }
  );
}

export default initVisitorModel;
