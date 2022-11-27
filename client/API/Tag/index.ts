import { customAxios } from "utils/CustomAxios";

export const getRecentTagsAPI = async () => {
  const { data } = await customAxios.get("/tag/recent");
  return data;
};
