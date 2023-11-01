import request from "@services/request";
import { UserFormDataType, UserType } from "@Types";

export const LoginAPI = async (LoginData: Omit<UserFormDataType, "nickname">) =>
  request<"success">({
    method: "post",
    url: `/user/login`,
    body: LoginData,
  });

export const LogOutAPI = async () =>
  request<"success">({
    method: "get",
    url: `/user/logout`,
  });

export const SignUpAPI = async (SignUpData: UserFormDataType) =>
  request<"success">({
    method: "post",
    url: `/user/signup`,
    body: SignUpData,
  });

export const getUserInfoAPI = async () =>
  request<UserType | null>({
    method: "get",
    url: "/user",
  });

export const submitGithubCode = async (code: string) =>
  request<"void">({
    method: "post",
    url: `/user/githubAuth?code=${code}`,
  });
