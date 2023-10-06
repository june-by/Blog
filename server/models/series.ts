import { Model } from "sequelize";
import { SeriesAttribute, SeriesCreationAttribute } from "types";
export class Series extends Model<SeriesAttribute, SeriesCreationAttribute> {
  public id!: number;
  public title!: string;
  public shortDescription!: string;
  public thumbNailUrl?: string | null;
}
