import { sequelizeInstance } from "models";
import { DataTypes, Model, Sequelize } from "sequelize";
import { VisitorAttribute, VisitorCreationAttribute } from "types/visitor";

export class Visitors extends Model<
  VisitorAttribute,
  VisitorCreationAttribute
> {
  declare id: number;
  declare date: string;
}

Visitors.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    tableName: "Visitors",
  }
);

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
