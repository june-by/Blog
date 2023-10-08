import {
  HasManyAddAssociationMixin,
  HasManySetAssociationsMixin,
  Model,
} from "sequelize";
import { PostAttribute, PostCreationAttributes } from "types";
import { Tags } from "./tag";

export class Posts extends Model<PostAttribute, PostCreationAttributes> {
  public id!: number;
  public title!: string;
  public content!: string;
  public shortDescription!: string;
  public category!: string;
  public thumbNailUrl?: string | null;
  public views!: number;
  public isPublic!: number;
  public SeriesId?: number;

  declare addTags: HasManyAddAssociationMixin<Tags, Tags[]>;
  declare setTags: HasManySetAssociationsMixin<Tags, Tags[]>;
}
