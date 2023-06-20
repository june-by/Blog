import { useMutation, useQuery, useQueryClient } from "react-query";
import { getUserInfoAPI, LoginAPI, LogOutAPI, SignUpAPI, submitGithubCode } from "services/user";
import { UserType } from "Types/user";
import CACHE_OPTION from "constants/cacheOption";
import QUERY_KEY from "constants/queryKey";
import MESSAGE from "constants/message";

interface ErrorMessage {
  messsage: string;
}

export const useGetUserInfo = () =>
  useQuery<UserType | null>([QUERY_KEY.USER], () => getUserInfoAPI(), { ...CACHE_OPTION.ALL, retry: false });

export const useSignUp = (onSuccess: () => void) => {
  return useMutation(SignUpAPI, {
    onSuccess: () => {
      alert(MESSAGE.SIGHUP_SUCCESS);
      return onSuccess();
    },
    onError: (error: ErrorMessage) => {
      alert(error.messsage);
    },
  });
};

export const useLogin = ({ onSuccess }: { onSuccess: () => void }) => {
  const queryClient = useQueryClient();
  return useMutation(LoginAPI, {
    onSuccess: () => {
      console.log("onSuccess Call");

      alert(MESSAGE.LOGIN_SUCCESS);
      onSuccess();
      return queryClient.invalidateQueries([QUERY_KEY.USER]);
    },
    onError: (error: ErrorMessage) => {
      alert(error.messsage);
    },
  });
};

export const useLogOut = () => {
  const queryClient = useQueryClient();
  return useMutation(LogOutAPI, {
    onSuccess: () => {
      alert(MESSAGE.LOGOUT_SUCCESS);
      return queryClient.invalidateQueries([QUERY_KEY.USER]);
    },
    onError: (error: ErrorMessage) => {
      alert(error.messsage);
    },
  });
};
