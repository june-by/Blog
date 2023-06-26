import MESSAGE from "constants/message";
import { UserType } from "Types/user";
import { customAxios } from "utils/CustomAxios";

interface LoginDataType {
  email: string;
  password: string;
}

interface SignUpDataType {
  email: string;
  password: string;
  nickname: string;
}

export const LoginAPI = async (LoginData: LoginDataType): Promise<"success"> => {
  try {
    const { data } = await customAxios.post(`/user/login`, LoginData);
    return data;
  } catch (err) {
    throw Error(MESSAGE.NETWORK_ERROR);
  }
};

export const LogOutAPI = async (): Promise<"success"> => {
  try {
    const { data } = await customAxios.get("/user/logout");
    return data;
  } catch (err) {
    throw Error(MESSAGE.NETWORK_ERROR);
  }
};

export const SignUpAPI = async (SignUpData: SignUpDataType): Promise<"success"> => {
  try {
    const { data } = await customAxios.post(`/user/signup`, SignUpData);
    return data;
  } catch (err) {
    throw Error(MESSAGE.NETWORK_ERROR);
  }
};

export const getUserInfoAPI = async (): Promise<UserType | null> => {
  console.log("customAxios : ", customAxios.defaults.headers.options);
  try {
    const { data } = await customAxios.get("/user");
    return data;
  } catch (err) {
    return null;
  }
};

export const submitGithubCode = async (code: string): Promise<void> => {
  try {
    await customAxios.post(`/user/githubAuth?code=${code}`);
  } catch (err) {
    throw Error();
  }
};
