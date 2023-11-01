import { DateType } from "@Types";
import { getCurrentYearMonthDate, getIsMoreThanADayAgo } from "@utils";

const KEY_FOR_COUNT_VISITOR = "KEY_FOR_COUNT_VISITOR";

export function getIsVisitedWithInADay() {
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

export function setIsVisitedInStorage() {
  localStorage.setItem(
    KEY_FOR_COUNT_VISITOR,
    JSON.stringify(getCurrentYearMonthDate())
  );
}
