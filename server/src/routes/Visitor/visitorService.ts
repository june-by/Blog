import { Visitors } from "@database";
import { VisitorAttribute } from "@types";

const getTotalVisitor = async () => await Visitors.count({});

const getTodayVisitor = async ({ date }: Pick<VisitorAttribute, "date">) =>
  await Visitors.count({
    where: { date },
  });

const getVisitor = async ({ date }: Pick<VisitorAttribute, "date">) => {
  const [totalVisitor, todayVisitor] = await Promise.all([
    getTotalVisitor(),
    getTodayVisitor({ date }),
  ]);

  return { totalVisitor, todayVisitor };
};

const addVisitor = async ({ date }: Pick<VisitorAttribute, "date">) =>
  await Visitors.create({
    date,
  });

export default { addVisitor, getVisitor };
