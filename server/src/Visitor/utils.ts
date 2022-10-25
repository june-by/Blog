export const getVisitorDateInfo = () => {
  const nowDate = new Date();
  return String(nowDate.getFullYear()) + String(nowDate.getMonth()) + String(nowDate.getDate());
};
