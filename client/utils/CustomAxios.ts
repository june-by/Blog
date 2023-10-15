import axios, { AxiosInstance } from "axios";
import { ServerURL } from "constants/serverURL";

const customAxios: AxiosInstance = axios.create({
  baseURL: `${ServerURL}`,
  withCredentials: true,
});

export default customAxios;
