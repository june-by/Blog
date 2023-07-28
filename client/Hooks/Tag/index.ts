import { useQuery } from "react-query";
import { getRecentTagsAPI } from "services/tag";
import CACHE_OPTION from "constants/cacheOption";
import QUERY_KEY from "constants/queryKey";

export const useGetRecentTags = () =>
  useQuery<string[]>([QUERY_KEY.TAG.RECENT], () => getRecentTagsAPI(), CACHE_OPTION.ALL);
