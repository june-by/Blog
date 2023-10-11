import { PostHashtag, Posts, Series, Snippets, Tags, Users, Visitors } from ".";

const Tables = {
  Visitors,
  Posts,
  Series,
  Snippets,
  Tags,
  Users,
  PostHashtag,
};

async function createTablesIfNotExist() {
  Posts.belongsTo(Series);
  Series.hasMany(Posts);
  Posts.belongsToMany(Tags, { through: PostHashtag });
  Tags.belongsToMany(Posts, { through: PostHashtag });

  for (const [key, table] of Object.entries(Tables)) {
    await table
      .sync()
      .then(() => {
        console.log(`Sync ${key} Table Complete`);
      })
      .catch((err) => {
        console.log(`Error occured while Sync ${key} Table`);
      });
  }
}

export default createTablesIfNotExist;
