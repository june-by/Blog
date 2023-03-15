import { customAxios } from "utils/CustomAxios";

export const getVisitorAPI = async () => {
  try {
    const { data } = await customAxios.get("/visitor");
    return data;
  } catch (err) {
    throw Error();
  }
};

export const postVisitorAPI = async () => {
  try {
    const { data } = await customAxios.post("/visitor");
    return data;
  } catch (err) {}
};
