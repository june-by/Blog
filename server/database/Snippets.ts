import { Model, DataTypes } from "sequelize";
import { SnippetAttribute, SnippetCreationAttribute } from "types";
import { sequelizeConnection } from "./SequelizeConnection";

export class Snippets extends Model<
  SnippetAttribute,
  SnippetCreationAttribute
> {
  public id!: number;
  public title!: string;
  public content!: string;
  public category!: string;
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
    sequelize: sequelizeConnection,
    tableName: "Snippets",
    timestamps: true,
  }
);
