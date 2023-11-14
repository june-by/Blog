import { Visitors } from "@database";
import { VisitorAttribute } from "@types";
import { getVisitorDateInfo } from "./utils";

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

const addVisitor = async () =>
  await Visitors.create({
    date: getVisitorDateInfo(),
  });

export default { addVisitor, getVisitor };
