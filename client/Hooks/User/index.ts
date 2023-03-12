import { useMutation, useQuery, useQueryClient } from "react-query";
import { getUserInfoAPI, LoginAPI, LogOutAPI, SignUpAPI, submitGithubCode } from "services/User";
import { UserType } from "Types/user";
import CACHE_OPTION from "constants/cacheOption";
import QUERY_KEY from "constants/queryKey";
import MESSAGE from "constants/message";

export const useGetUserInfo = () =>
  useQuery<UserType | null>([QUERY_KEY.USER], () => getUserInfoAPI(), { ...CACHE_OPTION.ALL, retry: false });

export const useSignUp = (onSuccess: () => void) => {
  return useMutation(SignUpAPI, {
    onSuccess: () => {
      alert(MESSAGE.SIGHUP_SUCCESS);
      return onSuccess();
    },
    onError: (error: any) => {
      alert(error?.response.data);
    },
  });
};

export const useLogin = (onSuccess: () => void) => {
  const queryClient = useQueryClient();
  return useMutation(LoginAPI, {
    onSuccess: () => {
      alert(MESSAGE.LOGIN_SUCCESS);
      onSuccess();
      return queryClient.invalidateQueries([QUERY_KEY.USER]);
    },
    onError: (error: any) => {
      alert(error?.response.data);
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
  });
};

export const useGithubLogin = () => {
  const queryClient = useQueryClient();

  return useMutation(submitGithubCode, {
    onSuccess: () => {
      alert("깃허브 로그인 성공");
      return queryClient.invalidateQueries([QUERY_KEY.USER]);
    },
  });
};
