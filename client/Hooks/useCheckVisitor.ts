import { useEffect } from "react";
import { QueryClient } from "react-query";
import { postVisitorAPI } from "services/visitor";

interface DateInfo {
  year: number;
  month: number;
  date: number;
}

const useCheckVisitor = (queryClient: QueryClient) => {
  useEffect(() => {
    const visitToday = localStorage.getItem("visitToday");
    const { date } = getCurrentTimeInfo();
    //localStorage에 값이 있음 -> 방문한 적이 있음

    if (visitToday) {
      const dateInfo: DateInfo = JSON.parse(visitToday);
      if (!isVisitMoreThanOneDay(dateInfo)) return;
    }

    AddVisitor(queryClient, date);
  }, []);
};

export default useCheckVisitor;

async function AddVisitor(queryClient: QueryClient, date: DateInfo) {
  localStorage.setItem("visitToday", JSON.stringify(date));
  //api콜
  const data = await postVisitorAPI();
  queryClient.setQueryData(["visitor"], data);
}

function getCurrentTimeInfo() {
  const currentTime = new Date();
  const currentYear = currentTime.getFullYear();
  const currentMonth = currentTime.getMonth();
  const currentDate = currentTime.getDate();
  const date = { year: currentYear, month: currentMonth, date: currentDate };
  return { date, currentYear, currentMonth, currentDate };
}

function isVisitMoreThanOneDay(dateInfo: DateInfo) {
  const { currentYear, currentMonth, currentDate } = getCurrentTimeInfo();

  if (currentMonth > dateInfo.month || currentYear > dateInfo.year) return true;
  if (currentDate > dateInfo.date) return true;

  return false;
}
