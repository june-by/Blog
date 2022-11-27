import { useQuery } from "react-query";
import { getRecentTagsAPI } from "API/Tag";
import { CACHE_OPTION } from "utils/cacheOption";
import { QUERY_KEY } from "utils/queryKey";

export const useGetRecentTags = () =>
  useQuery<string[]>(
    [QUERY_KEY.TAG.RECENT],
    () => getRecentTagsAPI(),
    CACHE_OPTION.ALL
  );
