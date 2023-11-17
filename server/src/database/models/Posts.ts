import {
  HasManyAddAssociationMixin,
  HasManySetAssociationsMixin,
  Model,
  DataTypes,
} from "sequelize";
import { PostAttribute, PostCreationAttributes } from "@types";
import { Tags } from "./Tags";
import { sequelizeConnection } from "../SequelizeConnection";

export class Posts extends Model<PostAttribute, PostCreationAttributes> {
  public id!: number;
  public title!: string;
  public content!: string;
  public shortDescription!: string;
  public category!: string;
  public thumbNailUrl?: string | null;
  public views!: number;
  public isPublic!: boolean;
  public SeriesId?: number;

  declare addTags: HasManyAddAssociationMixin<Tags, Tags[]>;
  declare setTags: HasManySetAssociationsMixin<Tags, Tags[]>;
}

export const initPosts = () => {
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
        type: DataTypes.BOOLEAN,
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
};
