import { SnippetFormType, SnippetType } from "@Types";
import request from "services/request";

export const addSnippetAPI = async (reqData: SnippetFormType) =>
  request({ method: "post", url: "/snippet", body: reqData });

export const editSnippetAPI = async ({
  snippetId,
  ...reqData
}: SnippetFormType & { snippetId: number }) =>
  request({ method: "patch", url: `/snippet/${snippetId}`, body: reqData });

export const getAllSnippetsIdAPI = async () =>
  request<Pick<SnippetType, "id">[]>({
    method: "get",
    url: "/snippet/load/id",
  });

export const getSnippetAPI = async ({ id }: Pick<SnippetType, "id">) =>
  request<SnippetType>({ method: "get", url: `/snippet/load/${id}` });

export const getAllSnippetsAPI = async () =>
  request<SnippetType[]>({ method: "get", url: "/snippet/load/all" });

export const deleteSnippetAPI = async ({ id }: Pick<SnippetType, "id">) =>
  request({ method: "delete", url: `/snippet/${id}` });
