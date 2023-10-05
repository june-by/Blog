import { DataTypes, Model, Sequelize } from "sequelize";
import { ModelType } from "./types";
import { SeriesAttribute, SeriesCreationAttribute } from "types";
import { sequelizeInstance } from "models";
import { Posts } from "./post";

export class Series extends Model<SeriesAttribute, SeriesCreationAttribute> {
  declare id: number;
  declare title: string;
  declare shortDescription: string;
  declare thumbNailUrl?: string | null;
}

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
    sequelize: sequelizeInstance,
    tableName: "Series",
  }
);

Series.hasMany(Posts);

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
