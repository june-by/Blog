import { customAxios } from "utils/CustomAxios";

export const getRecentTagsAPI = async () => {
  try {
    const { data } = await customAxios.get("/tag/recent");
    return data;
  } catch (err) {
    throw Error();
  }
};
