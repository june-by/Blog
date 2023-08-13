import { AllSeriesAPIType, OneSeriesAPIType } from "Types/series";
import { MutationParams } from "Types/shared";
import CACHE_OPTION from "constants/cacheOption";
import QUERY_KEY from "constants/queryKey";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { addSeriesAPI, getAllSeriesAPI, getSeriesAPI } from "services/series";

export const useGetAllSeires = () => {
  return useQuery<AllSeriesAPIType>(
    [QUERY_KEY.SERIES],
    () => getAllSeriesAPI(),
    {
      ...CACHE_OPTION.ALL,
    }
  );
};

export const useGetSeries = (seriesId: string) => {
  return useQuery<OneSeriesAPIType>(
    [QUERY_KEY.SERIES, seriesId],
    () => getSeriesAPI(seriesId),
    {
      ...CACHE_OPTION.ALL,
    }
  );
};

export const useAddSeries = ({ onSuccess, onError }: MutationParams) => {
  const queryClient = useQueryClient();
  return useMutation(addSeriesAPI, {
    onSuccess: () => {
      onSuccess();
      queryClient.invalidateQueries([QUERY_KEY.SERIES]);
    },
    onError,
  });
};
