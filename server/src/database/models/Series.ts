import { Model, DataTypes } from "sequelize";
import { sequelizeConnection } from "../SequelizeConnection";
import { SeriesAttribute, SeriesCreationAttribute } from "src/types";
export class Series extends Model<SeriesAttribute, SeriesCreationAttribute> {
  public id!: number;
  public title!: string;
  public shortDescription!: string;
  public thumbNailUrl?: string | null;
}

export const initSeries = () => {
  Series.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
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
      sequelize: sequelizeConnection,
      tableName: "Series",
      timestamps: true,
    }
  );
};
