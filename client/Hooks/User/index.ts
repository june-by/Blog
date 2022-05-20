import { useMutation, useQuery, useQueryClient } from "react-query";
import { getUserInfoAPI, LoginAPI, LogOutAPI, SignUpAPI } from "../../API/User";
import { UserType } from "../../Types/User";

export const useGetUserInfo = () => {
  return useQuery<UserType | null>(["User"], () => getUserInfoAPI(), {
    retry: false,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

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
      return queryClient.invalidateQueries(["User"]);
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
      return queryClient.invalidateQueries(["User"]);
    },
  });
};
