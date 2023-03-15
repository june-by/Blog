import { CommentType, RecentComment } from "Types/comment";
import { customAxios } from "utils/CustomAxios";

export const getCommentAPI = async (postId: number): Promise<{ comments: CommentType[] }> => {
  try {
    const { data } = await customAxios.get(`/post/load/comment/${postId}`);
    return data;
  } catch (err) {
    throw new Error();
  }
};

export const getRecentCommentAPI = async (): Promise<RecentComment[]> => {
  try {
    const { data } = await customAxios.get("/comment/recent");
    return data;
  } catch (err) {
    throw new Error();
  }
};

export const AddCommentAPI = async ({ postId, comment }: { postId: number; comment: string }): Promise<void> => {
  try {
    await customAxios.post(`/post/${postId}/comment`, {
      comment: comment,
    });
  } catch (err) {
    throw new Error();
  }
};
