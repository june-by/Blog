import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserInfoAPI, LoginAPI, LogOutAPI, SignUpAPI } from "services/user";
import { UserType } from "Types/user";
import { CACHE_OPTION, QUERY_KEY } from "@constants";
import { MutationParams } from "Types/shared";

export const useGetUserQuery = () =>
  useQuery<UserType | null>([QUERY_KEY.USER], () => getUserInfoAPI(), {
    ...CACHE_OPTION.ALL,
    retry: false,
  });

export const useSignUp = ({ onSuccess, onError }: MutationParams) =>
  useMutation(SignUpAPI, {
    onSuccess,
    onError,
  });

export const useLogin = ({ onSuccess, onError }: MutationParams) => {
  const queryClient = useQueryClient();
  return useMutation(LoginAPI, {
    onSuccess: () => {
      onSuccess();
      return queryClient.invalidateQueries([QUERY_KEY.USER]);
    },
    onError,
  });
};

export const useLogOut = ({ onSuccess }: MutationParams) => {
  const queryClient = useQueryClient();
  return useMutation(LogOutAPI, {
    onSuccess: () => {
      onSuccess();
      return queryClient.invalidateQueries([QUERY_KEY.USER]);
    },
    onError: (error: Error) => {
      alert(error.message);
    },
  });
};
