import { Visitors } from "models";

const getTotalVisitor = async () => {
  const totalVisitor = await Visitors.count({});
  return totalVisitor;
};

const getTodayVisitor = async ({ dateInfo }: { dateInfo: string }) => {
  const todayVisitor = await Visitors.count({
    where: { date: dateInfo },
  });
  return todayVisitor;
};

const addVisitor = async ({ dateInfo }: { dateInfo: string }) => {
  await Visitors.create({
    date: dateInfo,
  });
};

export default { getTotalVisitor, getTodayVisitor, addVisitor };
