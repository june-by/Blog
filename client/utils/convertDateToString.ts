import { DateType } from "@Types";
import { getYearMonthDate } from "./date";

interface ConvertDateToStringParams {
  date: Date;
  converter: ({ year, month, date }: DateType) => string;
}

export const convertDateToString = ({
  date,
  converter,
}: ConvertDateToStringParams) => converter(getYearMonthDate({ date }));
