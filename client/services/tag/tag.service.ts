import { TagType } from "Types/Tag";
import { customAxios } from "utils/CustomAxios";

export const getAllTags = async (): Promise<TagType[]> => {
  try {
    const { data } = await customAxios.get("/tag");
    return data;
  } catch (err) {
    throw Error();
  }
};
