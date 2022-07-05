import { customAxios } from "../../utils/CustomAxios";

export const getVisitorAPI = async () => {
  const { data } = await customAxios.get("/visitor");
  return data;
};

export const postVisitorAPI = async () => {
  const { data } = await customAxios.post("/visitor");
  return data;
};
