import { Snippets } from "./snippet";
import { DataTypes } from "sequelize";
import { sequelizeInstance } from "./sequelize";

function initSnippetModel() {
  Snippets.init(
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
      content: {
        type: DataTypes.TEXT("long"),
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING(30),
        allowNull: false, //필수
      },
    },
    {
      sequelize: sequelizeInstance,
      tableName: "Snippets",
    }
  );
}

export default initSnippetModel;
