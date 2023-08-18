import { AllSeriesAPIType } from "Types/series";
import { customAxios } from "utils/CustomAxios";

export const getAllSeriesAPI = async (): Promise<AllSeriesAPIType> => {
  try {
    const { data } = await customAxios.get("/series");
    return data;
  } catch (err) {
    throw new Error();
  }
};

interface AddSeriesAPIParams {
  title: string;
  shortDescription: string;
  thumbNailUrl: string;
}

export const addSeriesAPI = async (reqData: AddSeriesAPIParams) => {
  try {
    const { data } = await customAxios.post("/series", reqData);
    return data;
  } catch (err) {
    throw new Error();
  }
};
