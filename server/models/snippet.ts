import { DataTypes, Model, Sequelize } from "sequelize";
import { ModelType } from "./types";
import { SnippetAttribute, SnippetCreationAttribute } from "types";
import { sequelizeInstance } from "models";

export class Snippets extends Model<
  SnippetAttribute,
  SnippetCreationAttribute
> {
  declare id: number;
  declare title: string;
  declare content: string;
  declare category: string;
}

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

export default (sequelize: Sequelize, DataTypes: any) => {
  const Snippet: ModelType = sequelize.define(
    "Snippet",
    {
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
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci", //한글 + 이모티콘
    }
  );

  return Snippet;
};
