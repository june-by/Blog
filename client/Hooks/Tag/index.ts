import { useQuery } from "@tanstack/react-query";
import { CACHE_OPTION, QUERY_KEY } from "@constants";
import { getAllTags } from "services/tag";
import { ArchiveTagType } from "@Types";

export const useGetAllTags = (showMore: boolean) => {
  const { data } = useQuery<ArchiveTagType[]>(
    [QUERY_KEY.TAG.RECENT],
    () => getAllTags(),
    CACHE_OPTION.ALL
  );

  if (!data) {
    return [];
  }

  return showMore ? data : data.slice(0, 20);
};
