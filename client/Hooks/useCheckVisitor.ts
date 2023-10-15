import { useEffect } from "react";
import { QueryClient } from "@tanstack/react-query";
import { postVisitorAPI } from "@services/visitor";
import { QUERY_KEY } from "@constants";
import { DateType } from "@Types";
import { getCurrentYearMonthDate } from "@utils";

const useCheckVisitor = (queryClient: QueryClient) => {
  useEffect(() => {
    const isVisitedWithInADay = getIsVisitedWithInADay();

    if (isVisitedWithInADay) {
      return;
    }

    addVisitor(queryClient, getCurrentYearMonthDate());
  }, [queryClient]);
};

function getIsVisitedWithInADay() {
  const lastVisitDateInStorage = localStorage.getItem("visitToday");

  if (lastVisitDateInStorage) {
    const lastVisitDate: DateType = JSON.parse(lastVisitDateInStorage);

    const isMoreThanADayAgo = getIsMoreThanADayAgo(lastVisitDate);
    if (!isMoreThanADayAgo) {
      return true;
    }
  }

  return false;
}

async function addVisitor(queryClient: QueryClient, date: DateType) {
  localStorage.setItem("visitToday", JSON.stringify(date));
  const data = await postVisitorAPI();
  queryClient.setQueryData([QUERY_KEY.VISITOR], data);
}

function getIsMoreThanADayAgo({ year, month, date }: DateType) {
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

export default useCheckVisitor;
