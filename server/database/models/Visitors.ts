import { sequelizeConnection } from "database/SequelizeConnection";
import { Model, DataTypes } from "sequelize";
import { VisitorAttribute, VisitorCreationAttribute } from "types";

export class Visitors extends Model<
  VisitorAttribute,
  VisitorCreationAttribute
> {
  public id!: number;
  public date!: string;
}

export const initVisitors = () => {
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
};
