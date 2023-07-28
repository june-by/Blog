import { VisitorAPIType } from "Types/visitor";
import { customAxios } from "utils/CustomAxios";

export const getVisitorAPI = async (): Promise<VisitorAPIType> => {
  try {
    const { data } = await customAxios.get("/visitor");
    return data;
  } catch (err) {
    throw Error();
  }
};

export const postVisitorAPI = async (): Promise<{ todayVisitor: number; totalVisitor: number }> => {
  try {
    const { data } = await customAxios.post("/visitor");
    return data;
  } catch (err) {
    throw Error();
  }
};
