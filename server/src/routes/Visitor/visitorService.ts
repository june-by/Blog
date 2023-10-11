import { Visitors } from "src/database";
import { VisitorAttribute } from "src/types";

const getTotalVisitor = async () => await Visitors.count({});

const getTodayVisitor = async ({ date }: Pick<VisitorAttribute, "date">) =>
  await Visitors.count({
    where: { date },
  });

const addVisitor = async ({ date }: Pick<VisitorAttribute, "date">) =>
  await Visitors.create({
    date,
  });

export default { getTotalVisitor, getTodayVisitor, addVisitor };
