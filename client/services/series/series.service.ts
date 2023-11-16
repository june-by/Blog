import { AllSeriesAPIType, SeriesType } from "@Types";
import { REVALIDATE_TAG } from "@constants";
import request from "@services/request";

export const getAllSeries = async () => {
  try {
    return request<AllSeriesAPIType>({
      method: "get",
      url: `/series`,
      options: {
        next: {
          tags: [REVALIDATE_TAG.SERIES],
        },
      },
    });
  } catch (err) {
    return null;
  }
};

export const addSeriesAPI = async (
  reqData: Pick<SeriesType, "title" | "shortDescription" | "thumbNailUrl">
) => request<void>({ method: "post", url: "/series", body: reqData });
