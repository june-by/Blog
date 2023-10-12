import { sequelizeConnection } from "../SequelizeConnection";

export const PostHashtag = sequelizeConnection.define("PostHashtag", {});

export const initPostHashTag = () => {
  PostHashtag.init(
    {},
    {
      sequelize: sequelizeConnection,
      tableName: "PostHashtag",
      timestamps: true,
    }
  );
};
