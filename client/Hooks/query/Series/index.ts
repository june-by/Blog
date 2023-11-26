import { MutationParams } from "@Types";
import { QUERY_KEY } from "@constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addSeriesAPI } from "@services/series";

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
