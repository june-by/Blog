import { Sequelize } from "sequelize";
import { ModelType } from "./types";

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
