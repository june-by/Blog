import { Model, DataTypes } from "sequelize";
import { TagAttribute, TagCreationAttribute } from "types";
import { sequelizeConnection } from "./SequelizeConnection";

export class Tags extends Model<TagAttribute, TagCreationAttribute> {
  public id!: number;
  public content!: string;
}

Tags.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeConnection,
    tableName: "Tags",
    timestamps: true,
  }
);
