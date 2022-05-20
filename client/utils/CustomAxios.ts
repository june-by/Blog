import axios, { AxiosInstance } from "axios";
import { ServerURL } from "./ServerURL";

export const customAxios: AxiosInstance = axios.create({
  baseURL: `${ServerURL}`,
  withCredentials: true,
});
