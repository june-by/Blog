export const groupBy = <T extends Object>(data: T[], key: keyof T): Record<string, T[]> => {
  return data.reduce((acc: Record<string, T[]>, cur: T) => {
    var group = cur[key] as unknown as string;

    if (acc[group] === undefined) {
      acc[group] = [];
    }

    acc[group].push(cur);
    return acc;
  }, {});
};
