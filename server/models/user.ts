import { Model } from "sequelize";
import { UserAttribute, UserCreationAttribute } from "types";

export class Users extends Model<UserAttribute, UserCreationAttribute> {
  public id!: number;
  public email?: string;
  public nickname!: string;
  public password!: string;
  public provider?: string;
}
