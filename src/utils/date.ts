export interface DateType {
  year: number;
  month: number;
  date: number;
}

export const getYearMonthDate = ({ date }: { date: string }) => {
  const newDate = new Date(date);
  newDate.setHours(newDate.getHours() + 9);

  return {
    year: newDate.getFullYear(),
    month: newDate.getMonth() + 1,
    day: newDate.getDate(),
  };
};

export const formatDate = (date: string) => {
  const { year, month, day } = getYearMonthDate({ date });

  return `${year}.${month}.${day}`;
};
