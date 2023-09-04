import { SnippetFormType, SnippetType } from "Types/snippets";
import CACHE_OPTION from "constants/cacheOption";
import MESSAGE from "constants/message";
import QUERY_KEY from "constants/queryKey";
import { useMutation, useQuery } from "react-query";
import { addSnippetAPI, editSnippetAPI, getAllSnippetsAPI, getSnippetAPI } from "services/snippet/snippet.service";
import groupBy from "utils/groupBy";

export const useGetSnippetQuery = ({ id }: Pick<SnippetType, "id">) =>
  useQuery([QUERY_KEY.SNIPPET, id], () => getSnippetAPI({ id }), { ...CACHE_OPTION.ALL });

export const useGetAllSnippetsQuery = () =>
  useQuery([QUERY_KEY.SNIPPET], getAllSnippetsAPI, {
    ...CACHE_OPTION.ALL,
    select: (data) => {
      return groupBy(data, "category");
    },
  });

export const useAddSnippetMutation = () =>
  useMutation(addSnippetAPI, {
    onSuccess: () => {
      window.location.replace("/snippets");
    },
  });

export const useEditSnippetMutation = ({ snippetId }: { snippetId: number }) =>
  useMutation((reqData: SnippetFormType) => editSnippetAPI({ ...reqData, snippetId }), {
    onSuccess: () => {
      window.location.replace("/snippets");
    },
  });
