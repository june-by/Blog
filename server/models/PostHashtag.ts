import { DataTypes } from "sequelize";
import { sequelizeConnection } from "./SequelizeConnection";

export const PostHashtag = sequelizeConnection.define("PostHashtag", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
});

PostHashtag.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    sequelize: sequelizeConnection,
    tableName: "PostHashtag",
    timestamps: true,
  }
);
