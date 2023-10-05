import { DataTypes, Model, Sequelize } from "sequelize";
import { ModelType } from "./types";
import { PostAttribute, PostCreationAttributes } from "types";
import { sequelizeInstance } from "models";
import { Series } from "./series";
import { Tags } from "./tag";

export class Posts extends Model<PostAttribute, PostCreationAttributes> {
  declare id: number;
  declare title: string;
  declare content: string;
  declare shortDescription: string;
  declare category: string;
  declare thumbNailUrl?: string | null;
  declare views: number;
  declare isPublic: number;
}

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
  },
  {
    sequelize: sequelizeInstance,
    tableName: "Posts",
  }
);

Posts.belongsTo(Series);
Posts.belongsToMany(Tags, { through: "PostHashtag" });

export default (sequelize: Sequelize, DataTypes: any) => {
  const Post: ModelType = sequelize.define(
    "Post",
    {
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
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci", //한글 + 이모티콘
    }
  );

  Post.associate = (db) => {
    db.Post.belongsTo(db.Series);
    db.Post.belongsToMany(db.Tag, { through: "PostHashtag" });
  };
  return Post;
};
