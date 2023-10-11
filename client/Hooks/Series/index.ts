import { AllSeriesAPIType } from "Types/series";
import { MutationParams } from "Types/shared";
import CACHE_OPTION from "constants/cacheOption";
import QUERY_KEY from "constants/queryKey";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addSeriesAPI, getAllSeriesAPI } from "services/series";

export const useGetAllSeires = () =>
  useQuery<AllSeriesAPIType>([QUERY_KEY.SERIES], () => getAllSeriesAPI(), {
    ...CACHE_OPTION.ALL,
  });

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
