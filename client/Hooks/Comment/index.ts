import { useMutation, useQuery, useQueryClient } from "react-query";
import { getRecentCommentAPI } from "../../API/Comment";
import { AddCommentAPI } from "../../API/Post";
import { RecentComment } from "../../types/Comment";
import { CACHE_OPTION } from "../../utils/cacheOption";
import { QUERY_KEY } from "../../utils/queryKey";

export const useGetRecentComment = () => useQuery<RecentComment[] | undefined>([QUERY_KEY.COMMNET.RECENT], () => getRecentCommentAPI(), CACHE_OPTION.ALL);

export const useAddComment = (postId: number) => {
  const queryClient = useQueryClient();
  return useMutation(AddCommentAPI, {
    onSuccess: () => {
      queryClient.refetchQueries([QUERY_KEY.COMMNET.RECENT]);
      queryClient.invalidateQueries([QUERY_KEY.POST.ONE, postId]);
      return alert("댓글 등록 성공");
    },
  });
};
