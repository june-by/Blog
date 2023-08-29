import { AllSeriesAPIType } from "Types/series";
import request from "services/request";

export const getAllSeriesAPI = async () =>
  request<AllSeriesAPIType>({
    method: "get",
    url: `/series`,
  });
interface AddSeriesAPIParams {
  title: string;
  shortDescription: string;
  thumbNailUrl: string;
}

export const addSeriesAPI = async (reqData: AddSeriesAPIParams) =>
  request<void>({ method: "post", url: "/series", body: reqData });
