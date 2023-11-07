import { SnippetFormType, SnippetType } from "@Types";
import { REVALIDATE_TAG } from "@constants";
import request from "@services/request";
import { groupBy } from "@utils";

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
          tags: [`${REVALIDATE_TAG.SNIPPET}${id}`],
        },
      },
    });

    return data;
  } catch (err) {
    return null;
  }
};
export const getAllSnippets = async () => {
  try {
    const data = await request<SnippetType[]>({
      method: "get",
      url: "/snippet/load/all",
      options: { next: { tags: [REVALIDATE_TAG.SNIPPET] } },
    });
    return groupBy(data, "category");
  } catch (err) {
    return null;
  }
};
export const deleteSnippetAPI = async ({ id }: Pick<SnippetType, "id">) =>
  request({ method: "post", url: `/snippet/delete/${id}` });
