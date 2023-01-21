import { useMutation, useQuery, useQueryClient } from "react-query";
import { getRecentCommentAPI } from "services/Comment";
import { AddCommentAPI } from "services/Post";
import { RecentComment } from "Types/comment";
import CACHE_OPTION from "constants/cacheOption";
import QUERY_KEY from "constants/queryKey";

export const useGetRecentComment = () =>
  useQuery<RecentComment[] | undefined>([QUERY_KEY.COMMNET.RECENT], () => getRecentCommentAPI(), CACHE_OPTION.ALL);

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
