import { Sequelize } from "sequelize";
import { ModelType } from "./types";
export default (sequelize: Sequelize, DataTypes: any) => {
  const Image: ModelType = sequelize.define(
    "Image",
    {
      src: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );

  Image.associate = (db) => {
    db.Image.belongsTo(db.Post);
  };
  return Image;
};
