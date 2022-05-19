export const dateForm = (date: Date) => {
  const newDate = new Date(date);
  newDate.setHours(newDate.getHours() + 9);
  return `${newDate.getFullYear()}년 ${newDate.getMonth() + 1}월 ${newDate.getDate()}일`;
};
