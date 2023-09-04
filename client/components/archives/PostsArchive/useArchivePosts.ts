import { useGetAllPostsQuery } from "Hooks/Post";
import { getYearMonthDate } from "utils/convertDateToString";
import groupBy from "utils/groupBy";

const useArchivePosts = () => {
  const { data } = useGetAllPostsQuery();

  if (data)
    return groupBy(
      data.map(({ createdAt, ...params }) => {
        const { year, month, date } = getYearMonthDate({ date: createdAt });
        return {
          date: `${month}.${date}`,
          year,
          ...params,
        };
      }),
      "year"
    );

  return data;
};

export default useArchivePosts;
