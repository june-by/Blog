import axios, { AxiosInstance } from "axios";
import { ServerURL } from "@constants";

const customAxios: AxiosInstance = axios.create({
  baseURL: `${ServerURL}`,
  withCredentials: true,
});

export default customAxios;
