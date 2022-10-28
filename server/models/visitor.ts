import { Sequelize } from "sequelize";
export default (sequelize: Sequelize, DataTypes: any) => {
  return sequelize.define(
    "Visitor",
    {
      date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
  );
};
