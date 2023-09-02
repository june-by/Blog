import { Sequelize } from "sequelize";
import { ModelType } from "./types";

export default (sequelize: Sequelize, DataTypes: any) => {
  const Snippets: ModelType = sequelize.define(
    "Snippets",
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

  return Snippets;
};
