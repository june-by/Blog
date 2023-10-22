import { AllSeriesAPIType, SeriesType } from "@Types";
import request from "@services/request";

export const getAllSeriesAPI = async () =>
  request<AllSeriesAPIType>({
    method: "get",
    url: `/series`,
  });

export const addSeriesAPI = async (
  reqData: Pick<SeriesType, "title" | "shortDescription" | "thumbNailUrl">
) => request<void>({ method: "post", url: "/series", body: reqData });
