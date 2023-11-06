import { SnippetFormType, SnippetType } from "@Types";
import request from "@services/request";

export const addSnippetAPI = async (reqData: SnippetFormType) =>
  request({ method: "post", url: "/snippet", body: reqData });

export const editSnippetAPI = async ({
  snippetId,
  ...reqData
}: SnippetFormType & { snippetId: number }) =>
  request({ method: "post", url: `/snippet/edit/${snippetId}`, body: reqData });

export const getAllSnippetsIdAPI = async () =>
  request<Pick<SnippetType, "id">[]>({
    method: "get",
    url: "/snippet/load/id",
  });

export const getSnippet = async ({ id }: Pick<SnippetType, "id">) => {
  if (isNaN(id)) return null;

  try {
    const data = await request<SnippetType | null>({
      url: `/snippet/load/${id}`,
      method: "get",
      options: {
        next: {
          tags: [`snippet${id}`],
        },
      },
    });

    return data;
  } catch (err) {
    return null;
  }
};
export const getAllSnippetsAPI = async () =>
  request<SnippetType[]>({ method: "get", url: "/snippet/load/all" });

export const deleteSnippetAPI = async ({ id }: Pick<SnippetType, "id">) =>
  request({ method: "post", url: `/snippet/delete/${id}` });
