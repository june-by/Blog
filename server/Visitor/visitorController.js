const { Visitor } = require("../models");

const GetVisitor = async () => {
  const nowDate = new Date();
  const DateInfo = String(nowDate.getFullYear()) + String(nowDate.getMonth()) + String(nowDate.getDate());
  const totalVisitor = await Visitor.count({});
  const todayVisitor = await Visitor.count({
    where: { date: DateInfo },
  });
  return {
    totalVisitor: totalVisitor,
    todayVisitor: todayVisitor,
  };
};

const AddVisitor = async () => {
  const nowDate = new Date();
  const DateInfo = String(nowDate.getFullYear()) + String(nowDate.getMonth()) + String(nowDate.getDate());
  await Visitor.create({
    date: DateInfo,
  });
};

module.exports = {
  GetVisitor,
  AddVisitor,
};
