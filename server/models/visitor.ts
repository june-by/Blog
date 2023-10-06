import { Model } from "sequelize";
import { VisitorAttribute, VisitorCreationAttribute } from "types/visitor";

export class Visitors extends Model<
  VisitorAttribute,
  VisitorCreationAttribute
> {
  public id!: number;
  public date!: string;
}
