const { sequelize } = require("../models");
const GetRecentTags = async () => {
  const [tags, _] = await sequelize.query("select TagId from PostHashtag order by createdAt desc limit 15;");
  const contents = [];
  for (const v of tags) {
    const [result] = await sequelize.query("select content from Tags where id=?;", {
      replacements: [v.TagId],
    });
    contents.push(result[0].content);
  }
  return contents;
};
module.exports = {
  GetRecentTags,
};
