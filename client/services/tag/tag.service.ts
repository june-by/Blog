import { customAxios } from "utils/CustomAxios";

export const getRecentTagsAPI = async (): Promise<string[]> => {
  try {
    const { data } = await customAxios.get("/tag/recent");
    return data;
  } catch (err) {
    throw Error();
  }
};
