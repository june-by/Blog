import { customAxios } from "utils/CustomAxios";

interface RequestParams {
  method: "get" | "post" | "patch";
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
    const errorMessage = onError ? onError(err) : err;
    throw new Error(errorMessage);
  }
};

export default request;
