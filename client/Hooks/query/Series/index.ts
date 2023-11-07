import { AllSeriesAPIType, MutationParams } from "@Types";
import { CACHE_OPTION, QUERY_KEY } from "@constants";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addSeriesAPI, getAllSeries } from "@services/series";

export const useGetAllSeires = () =>
  useQuery<AllSeriesAPIType | null>([QUERY_KEY.SERIES], getAllSeries, {
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
