import React, { PropsWithChildren, useCallback, useEffect } from "react";
import { postVisitorAPI } from "@services/visitor";
import { QUERY_KEY } from "@constants";
import { DateType } from "@Types";
import { getCurrentYearMonthDate } from "@utils";
import { useQueryClient } from "@tanstack/react-query";

const KEY_FOR_COUNT_VISITOR = "KEY_FOR_COUNT_VISITOR";

const WithCountVisitor = ({ children }: PropsWithChildren) => {
  const queryClient = useQueryClient();

  const addVisitor = useCallback(async () => {
    localStorage.setItem(
      KEY_FOR_COUNT_VISITOR,
      JSON.stringify(getCurrentYearMonthDate())
    );
    const data = await postVisitorAPI();
    queryClient.setQueryData([QUERY_KEY.VISITOR], data);
  }, [queryClient]);

  useEffect(() => {
    const isVisitedWithInADay = getIsVisitedWithInADay();

    if (isVisitedWithInADay) {
      return;
    }

    addVisitor();
  }, [addVisitor, queryClient]);

  return <React.Fragment>{children}</React.Fragment>;
};

function getIsVisitedWithInADay() {
  const lastVisitDateInStorage = localStorage.getItem(KEY_FOR_COUNT_VISITOR);

  if (lastVisitDateInStorage) {
    const lastVisitDate: DateType = JSON.parse(lastVisitDateInStorage);

    const isMoreThanADayAgo = getIsMoreThanADayAgo(lastVisitDate);
    if (!isMoreThanADayAgo) {
      return true;
    }
  }

  return false;
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

export default WithCountVisitor;
