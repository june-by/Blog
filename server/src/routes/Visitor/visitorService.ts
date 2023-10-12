import { Visitors } from "@database";
import { VisitorAttribute } from "@types";

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
