import request from "@services/request";
import { UserType } from "@Types";

interface LoginDataType {
  email: string;
  password: string;
}

interface SignUpDataType {
  email: string;
  password: string;
  nickname: string;
}

export const LoginAPI = async (LoginData: LoginDataType) =>
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

export const SignUpAPI = async (SignUpData: SignUpDataType) =>
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
