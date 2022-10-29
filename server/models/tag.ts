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
    //        db.Comment.belongsTo(db.User); //belongsTo가 되면 UserId, PostId column이 생긴다.
    db.Tag.belongsToMany(db.Post, { through: "PostHashtag" });
  };
  return Tag;
};
