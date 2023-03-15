import { RecentComment } from "Types/comment";
import { customAxios } from "utils/CustomAxios";

export const getRecentCommentAPI = async (): Promise<RecentComment[]> => {
  try {
    const { data } = await customAxios.get("/comment/recent");
    return data;
  } catch (err) {
    throw new Error();
  }
};
