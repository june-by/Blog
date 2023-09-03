import { SnippetFormType, SnippetType } from "Types/snippets";
import CACHE_OPTION from "constants/cacheOption";
import QUERY_KEY from "constants/queryKey";
import { useRouter } from "next/router";
import { UseQueryOptions, useMutation, useQuery } from "react-query";
import {
  addSnippetAPI,
  deleteSnippetAPI,
  editSnippetAPI,
  getAllSnippetsAPI,
  getSnippetAPI,
} from "services/snippet/snippet.service";
import groupBy from "utils/groupBy";

export const useGetSnippetQuery = ({ id }: Pick<SnippetType, "id">) => {
  const { replace } = useRouter();
  return useQuery([QUERY_KEY.SNIPPET, id], () => getSnippetAPI({ id }), {
    ...CACHE_OPTION.ALL,
    enabled: isNaN(id) ? false : true,
    onError: (err) => {
      alert(err);
      replace("/");
    },
  });
};
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

export const useDeleteSnippetMutation = () =>
  useMutation(deleteSnippetAPI, {
    onSuccess: () => {
      window.location.replace("/snippets");
    },
  });
