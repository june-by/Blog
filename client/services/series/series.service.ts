import { AllSeriesAPIType, OneSeriesAPIType, SeriesType } from "Types/series";
import { customAxios } from "utils/CustomAxios";

export const getAllSeriesAPI = async (): Promise<AllSeriesAPIType> => {
  try {
    const { data } = await customAxios.get("/series/load");
    return data;
  } catch (err) {
    throw new Error();
  }
};

export const getSeriesAPI = async (
  seriesId: string
): Promise<OneSeriesAPIType> => {
  try {
    const { data } = await customAxios.get(`/load/${seriesId}`);
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
