import { useMutation, useQuery, useQueryClient } from "react-query";
import { getRecentCommentAPI } from "../../API/Comment";
import { AddCommentAPI } from "../../API/Post";
import { RecentComment } from "../../Types/Comment";

export const useGetRecentComment = () => {
  return useQuery<RecentComment[] | undefined>(["RecentComment"], () => getRecentCommentAPI(), {
    retry: false,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export const useAddComment = (postId: number) => {
  const queryClient = useQueryClient();
  return useMutation(AddCommentAPI, {
    onSuccess: () => {
      queryClient.refetchQueries(["RecentComment"]);
      queryClient.invalidateQueries(["Post", postId]);
      return alert("댓글 등록 성공");
    },
  });
};
