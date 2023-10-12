import { sequelizeConnection } from "../SequelizeConnection";
import { Model, DataTypes } from "sequelize";
import { TagAttribute, TagCreationAttribute } from "@types";

export class Tags extends Model<TagAttribute, TagCreationAttribute> {
  public id!: number;
  public content!: string;
}

export const initTags = () => {
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
};
