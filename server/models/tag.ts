import { Model } from "sequelize";
import { TagAttribute, TagCreationAttribute } from "types";

export class Tags extends Model<TagAttribute, TagCreationAttribute> {
  public id!: number;
  public content!: string;
}
