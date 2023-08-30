export default function getYearMonthDate(date: Date) {
  const newDate = new Date(date);
  newDate.setHours(newDate.getHours() + 9);

  return {
    year: newDate.getFullYear(),
    month: newDate.getMonth() + 1,
    date: newDate.getDate(),
  };
}
