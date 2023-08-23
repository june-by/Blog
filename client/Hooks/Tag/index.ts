import { useQuery } from "react-query";
import CACHE_OPTION from "constants/cacheOption";
import QUERY_KEY from "constants/queryKey";
import { getAllTags } from "services/tag";
import { ArchiveTagType } from "Types/tag";

export const useGetAllTags = (showMore: boolean) => {
  const { data } = useQuery<ArchiveTagType[]>(
    [QUERY_KEY.TAG.RECENT],
    () => getAllTags(),
    CACHE_OPTION.ALL
  );

  if (!data) return [];

  return showMore ? data : data.slice(0, 20);
};
