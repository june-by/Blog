import { useMutation, useQuery, useQueryClient } from "react-query";
import { getUserInfoAPI, LoginAPI, LogOutAPI, SignUpAPI } from "API/User";
import { UserType } from "Types/User";
import { CACHE_OPTION } from "utils/cacheOption";
import { QUERY_KEY } from "utils/queryKey";

export const useGetUserInfo = () =>
  useQuery<UserType | null>(
    [QUERY_KEY.USER],
    () => getUserInfoAPI(),
    CACHE_OPTION.ALL
  );

export const useSignUp = (onSuccess: () => void) => {
  return useMutation(SignUpAPI, {
    onSuccess: () => {
      alert("* 회원가입에 성공했습니다");
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
      alert("* 로그인 성공");
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
      alert("* 로그아웃되었습니다");
      return queryClient.invalidateQueries([QUERY_KEY.USER]);
    },
  });
};
