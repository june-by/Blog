import model from "models";
const { Visitor } = model;
const getTotalVisitor = async () => {
  const totalVisitor = await Visitor.count({});
  return totalVisitor;
};

const getTodayVisitor = async ({ dateInfo }: { dateInfo: string }) => {
  const todayVisitor = await Visitor.count({
    where: { date: dateInfo },
  });
  return todayVisitor;
};

const addVisitor = async ({ dateInfo }: { dateInfo: string }) => {
  await Visitor.create({
    date: dateInfo,
  });
};

export default { getTotalVisitor, getTodayVisitor, addVisitor };
