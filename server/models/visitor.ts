import { Model } from "sequelize";
import { VisitorAttribute, VisitorCreationAttribute } from "types";

export class Visitors extends Model<
  VisitorAttribute,
  VisitorCreationAttribute
> {
  public id!: number;
  public date!: string;
}
