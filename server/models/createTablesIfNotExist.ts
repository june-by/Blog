import { Posts, Series, Snippets, Tags, Users, Visitors } from "./";

const Tables = {
  Visitors,
  Posts,
  Series,
  Snippets,
  Tags,
  Users,
};

async function createTablesIfNotExist() {
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
