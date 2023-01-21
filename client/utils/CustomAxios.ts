import axios, { AxiosInstance } from "axios";
import { ServerURL } from "../constants/serverURL";

export const customAxios: AxiosInstance = axios.create({
  baseURL: `${ServerURL}`,
  withCredentials: true,
});
