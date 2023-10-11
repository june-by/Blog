import { Model, DataTypes } from "sequelize";
import { VisitorAttribute, VisitorCreationAttribute } from "types";
import { sequelizeConnection } from "./SequelizeConnection";

export class Visitors extends Model<
  VisitorAttribute,
  VisitorCreationAttribute
> {
  public id!: number;
  public date!: string;
}

Visitors.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeConnection,
    tableName: "Visitors",
    timestamps: true,
  }
);
