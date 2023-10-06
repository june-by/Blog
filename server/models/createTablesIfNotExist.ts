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
        console.log(`${key} Table is Created`);
      })
      .catch((err) => {
        console.log(key, " 테이블만드는동안 에러가 생겼네?");
        console.log(err);
      });
  }
}

export default createTablesIfNotExist;
