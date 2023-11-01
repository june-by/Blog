import { MESSAGE } from "@constants";
import { customAxios } from "@utils";

interface RequestParams {
  method: "get" | "post" | "patch" | "delete";
  url: string;
  body?: any;
  onError?: (err: any) => any;
}

const request = async <T>({
  method,
  url,
  body,
  onError,
}: RequestParams): Promise<T> => {
  try {
    const { data } = await customAxios[method](url, body);
    return data;
  } catch (err: any) {
    const errorMessage = onError ? onError(err) : err?.response?.data;
    throw new Error(errorMessage || MESSAGE.NETWORK_ERROR);
  }
};

export default request;
