import MESSAGE from "constants/message";
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

export const LoginAPI = async (LoginData: LoginDataType) => {
  try {
    const { data } = await customAxios.post(`/user/login`, LoginData);
    return data;
  } catch (err) {
    alert(MESSAGE.NETWORK_ERROR);
    throw Error();
  }
};

export const LogOutAPI = async () => {
  try {
    const { data } = await customAxios.get("/user/logout");
    return data;
  } catch (err) {
    alert(MESSAGE.NETWORK_ERROR);
    throw Error();
  }
};

export const SignUpAPI = async (SignUpData: SignUpDataType) => {
  try {
    const { data } = await customAxios.post(`/user/signup`, SignUpData);
    return data;
  } catch (err) {
    alert(MESSAGE.NETWORK_ERROR);
    throw Error();
  }
};

export const getUserInfoAPI = async () => {
  try {
    const { data } = await customAxios.get("/user");
    return data;
  } catch (err) {
    return null;
  }
};

export const submitGithubCode = async (code: string) => {
  try {
    console.log("submitCode");
    const { data } = await customAxios.post(`/user/githubAuth?code=${code}`);
    return data;
  } catch (err) {
    throw Error();
  }
};
