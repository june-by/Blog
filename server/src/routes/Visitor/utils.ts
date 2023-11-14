export const getVisitorDateInfo = () => {
  const nowDate = new Date();
  return (
    String(nowDate.getFullYear()) +
    String(nowDate.getMonth()) +
    String(nowDate.getDate())
  );
};

const KR_TIME_DIFF = 9 * 60 * 60 * 1000;

export const getKRTime = () => {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60 * 1000;

  const kr_now = new Date(utc + KR_TIME_DIFF);
  return kr_now;
};

export const getNextKRDay = () => {
  const now = getKRTime();
  now.setDate(now.getDate() + 1);

  now.setHours(0, 0, 0, 0);
  return now;
};
