import { useEffect } from "react";
import { QueryClient } from "react-query";
import { postVisitorAPI } from "API/Visitor";

interface DateInfo {
  year: number;
  month: number;
  date: number;
}

const AddVisitor = async (queryClient: QueryClient, date: DateInfo) => {
  localStorage.setItem("visitToday", JSON.stringify(date));
  //api콜
  const data = await postVisitorAPI();
  queryClient.setQueryData(["visitor"], data);
};

const useCheckVisitor = (queryClient: QueryClient) => {
  useEffect(() => {
    const visitToday = localStorage.getItem("visitToday");
    const nowYear = new Date().getFullYear();
    const nowMonth = new Date().getMonth();
    const nowDate = new Date().getDate();
    const date = {
      year: nowYear,
      month: nowMonth,
      date: nowDate,
    };
    //localStorage에 값이 있음 -> 방문한 적이 있음
    if (visitToday) {
      const dateInfo: DateInfo = JSON.parse(visitToday);
      if (nowMonth > dateInfo.month || nowYear > dateInfo.year)
        AddVisitor(queryClient, date);
      else {
        if (nowDate > dateInfo.date) AddVisitor(queryClient, date);
      }
    } else {
      AddVisitor(queryClient, date);
    }
  }, []);
};

export default useCheckVisitor;
