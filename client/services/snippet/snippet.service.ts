import { SnippetFormType } from "Types/snippets";
import request from "services/request";

export const addSnippetAPI = async (reqData: SnippetFormType) =>
  request({ method: "post", url: "/snippet", body: reqData });

export const editSnippetAPI = async ({ snippetId, ...reqData }: SnippetFormType & { snippetId: string }) =>
  request({ method: "patch", url: `/snippet/${snippetId}`, body: reqData });
