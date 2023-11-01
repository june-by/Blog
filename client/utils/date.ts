import { DateType } from "@Types";

export const getYearMonthDate = ({ date }: { date: Date }) => {
  const newDate = new Date(date);
  newDate.setHours(newDate.getHours() + 9);

  return {
    year: newDate.getFullYear(),
    month: newDate.getMonth() + 1,
    date: newDate.getDate(),
  };
};

export const getCurrentYearMonthDate = () =>
  getYearMonthDate({ date: new Date() });

export const DATE_FORM = {
  ko: ({ year, month, date }: DateType) => `${year}년 ${month}월 ${date}일`,
  dot: ({ year, month, date }: DateType) => `${year}.${month}.${date}`,
};

export function getIsMoreThanADayAgo({ year, month, date }: DateType) {
  const {
    year: currentYear,
    month: currentMonth,
    date: currentDate,
  } = getCurrentYearMonthDate();

  if (currentMonth > month || currentYear > year) {
    return true;
  }

  if (currentDate > date) {
    return true;
  }

  return false;
}
