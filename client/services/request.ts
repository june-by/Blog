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

    const data = await convertResponse<T | string>(res);

    if (res.ok) {
      return data as T;
    } else {
      throw new Error(data as string);
    }
  } catch (err: any) {
    throw new Error(err?.message || MESSAGE.NETWORK_ERROR);
  }
};

export default request;

async function convertResponse<T>(res: Response): Promise<T> {
  const isJSONResponse =
    res.headers.get("content-type")?.indexOf("application/json") !== -1;

  if (isJSONResponse) {
    return await res.json();
  } else {
    return (await res.text()) as unknown as T;
  }
}
