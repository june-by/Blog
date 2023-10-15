import { useGetAllPostsQuery } from "Hooks/Post";
import { getYearMonthDate, groupBy } from "@utils";

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
