import { useQuery } from "react-query";
import { getRecentTagsAPI } from "../../API/Tag";

export const useGetRecentTags = () => {
  return useQuery<string[]>(["RecentTags"], () => getRecentTagsAPI(), {
    retry: false,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
