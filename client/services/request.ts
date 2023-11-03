import { MESSAGE, ServerURL } from "@constants";

interface RequestParams {
  method: "get" | "post" | "patch" | "delete";
  url: string;
  body?: any;
  cache?: "force-cache" | "no-store";
}

const request = async <T>({
  method,
  url,
  body,
  cache,
}: RequestParams): Promise<T> => {
  try {
    const res = await fetch(`${ServerURL}${url}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      cache,
      credentials: "include",
    });

    const isJSONResponse =
      res.headers.get("content-type")?.indexOf("application/json") !== -1;

    if (isJSONResponse) {
      const data = await res.json();
      if (res.ok) {
        return data;
      } else {
        throw new Error(data);
      }
    } else {
      const text = await res.text();
      if (res.ok) {
        return text as T;
      } else {
        throw new Error(text);
      }
    }
  } catch (err: any) {
    throw new Error(err?.message || MESSAGE.NETWORK_ERROR);
  }
};

export default request;
