import { customAxios } from "./../../utils/CustomAxios";

interface LoginDataType {
  email: string;
  password: string;
}

interface SignUpDataType {
  email: string;
  password: string;
  nickname: string;
}

export const LoginAPI = async (LoginData: LoginDataType) => {
  const { data } = await customAxios.post(`/user/login`, LoginData);
  return data;
};

export const LogOutAPI = async () => {
  const { data } = await customAxios.get("/user/logout");
  return data;
};

export const SignUpAPI = async (SignUpData: SignUpDataType) => {
  const { data } = await customAxios.post(`/user/signup`, SignUpData);
  return data;
};

export const getUserInfoAPI = async () => {
  const { data } = await customAxios.get("/user");
  return data;
};
