import { useMutation, useQuery, useQueryClient } from "react-query";
import { getUserInfoAPI, LoginAPI, LogOutAPI, SignUpAPI, submitGithubCode } from "services/user";
import { UserType } from "Types/user";
import CACHE_OPTION from "constants/cacheOption";
import QUERY_KEY from "constants/queryKey";
import MESSAGE from "constants/message";
import { ErrorMessage, MutationParams } from "Types/shared";

export const useGetUserQuery = () =>
  useQuery<UserType | null>([QUERY_KEY.USER], () => getUserInfoAPI(), { ...CACHE_OPTION.ALL, retry: false });

export const useSignUp = ({ onSuccess, onError }: MutationParams) => {
  return useMutation(SignUpAPI, {
    onSuccess,
    onError,
  });
};

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
    onError: (error: ErrorMessage) => {
      alert(error.messsage);
    },
  });
};
