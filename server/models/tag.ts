import { DataTypes, Model, Sequelize } from "sequelize";
import { ModelType } from "./types";
import { TagAttribute, TagCreationAttribute } from "types";
import { sequelizeInstance } from "models";

export class Tags extends Model<TagAttribute, TagCreationAttribute> {
  declare id: number;
  declare content: string;
}

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

export default (sequelize: Sequelize, DataTypes: any) => {
  const Tag: ModelType = sequelize.define(
    "Tag",
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
  );

  Tag.associate = (db) => {
    db.Tag.belongsToMany(db.Post, { through: "PostHashtag" });
  };
  return Tag;
};
