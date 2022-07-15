import { customAxios } from "../../utils/CustomAxios";

export const getRecentCommentAPI = async () => {
  const { data } = await customAxios.get("/comment/recent");
  return data;
};
