interface ConverterParams {
  year: number;
  month: number;
  date: number;
}

interface ConvertDateToStringParams {
  date: Date;
  converter: ({ year, month, date }: ConverterParams) => string;
}

export const convertDateToString = ({
  date,
  converter,
}: ConvertDateToStringParams) => converter(getYearMonthDate({ date }));

export const DATE_FORM = {
  ko: ({ year, month, date }: ConverterParams) =>
    `${year}년 ${month}월 ${date}일`,
  dot: ({ year, month, date }: ConverterParams) => `${year}.${month}.${date}`,
};

export const getYearMonthDate = ({
  date,
}: Pick<ConvertDateToStringParams, "date">) => {
  const newDate = new Date(date);
  newDate.setHours(newDate.getHours() + 9);

  return {
    year: newDate.getFullYear(),
    month: newDate.getMonth() + 1,
    date: newDate.getDate(),
  };
};
