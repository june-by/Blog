import { Posts } from "./post";
import { DataTypes } from "sequelize";
import { sequelizeConnection } from "./sequelize";

function initPostModel() {
  Posts.init(
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
      content: {
        type: DataTypes.TEXT("long"),
        allowNull: false,
      },
      shortDescription: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      category: {
        type: DataTypes.STRING(30),
        allowNull: false, //필수
      },
      thumbNailUrl: {
        type: DataTypes.STRING(100),
        allowNull: true, //필수
      },
      views: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      isPublic: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      SeriesId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
      },
    },
    {
      sequelize: sequelizeConnection,
      tableName: "Posts",
      timestamps: true,
    }
  );
}

export default initPostModel;
