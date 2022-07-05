import { useEffect } from "react";
import { postVisitorAPI } from "../API/Visitor";

const useCheckVisitor = () => {
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
      const dateInfo: { year: number; month: number; date: number } = JSON.parse(visitToday);
      if (nowMonth > dateInfo.month || nowYear > dateInfo.year) {
        //오늘이 다음달일때,
        localStorage.setItem("visitToday", JSON.stringify(date));
        //api콜
        postVisitorAPI();
      } else {
        //같은달일때,
        if (nowDate > dateInfo.date) {
          //하루이상 지났을 때,
          localStorage.setItem("visitToday", JSON.stringify(date));
          //api콜
          postVisitorAPI();
        }
      }
    } else {
      // 방문한적이 없음.
      localStorage.setItem("visitToday", JSON.stringify(date));
      postVisitorAPI();
    }
  }, []);
};

export default useCheckVisitor;
