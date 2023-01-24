import { customAxios } from "utils/CustomAxios";

export const getRecentCommentAPI = async () => {
  try {
    const { data } = await customAxios.get("/comment/recent");
    return data;
  } catch (err) {
    throw new Error();
  }
};
