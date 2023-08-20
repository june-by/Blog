import { Sequelize } from "sequelize";
import { ModelType } from "./types";

export default (sequelize: Sequelize, DataTypes: any) => {
  const Series: ModelType = sequelize.define(
    "Series",
    {
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
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci", //한글 + 이모티콘
    }
  );

  Series.associate = (db) => {
    db.Series.hasMany(db.Post);
  };

  return Series;
};
