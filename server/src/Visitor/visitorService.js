const { Visitor } = require("../../models");

const getTotalVisitor = async () => {
  const totalVisitor = await Visitor.count({});
  return totalVisitor;
};

const getTodayVisitor = async ({ dateInfo }) => {
  const todayVisitor = await Visitor.count({
    where: { date: dateInfo },
  });
  return todayVisitor;
};

const addVisitor = async ({ dateInfo }) => {
  await Visitor.create({
    date: dateInfo,
  });
};

module.exports = { getTotalVisitor, getTodayVisitor, addVisitor };
