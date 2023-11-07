import { SnippetFormType, SnippetType } from "@Types";
import { CACHE_OPTION, QUERY_KEY } from "@constants";
import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addSnippetAPI,
  deleteSnippetAPI,
  editSnippetAPI,
  getSnippet,
} from "@services/snippet";

export const useGetSnippetQuery = ({ id }: Pick<SnippetType, "id">) => {
  const { replace } = useRouter();
  return useQuery([QUERY_KEY.SNIPPET, id], () => getSnippet({ id }), {
    ...CACHE_OPTION.ALL,
    enabled: isNaN(id) ? false : true,
    onError: (err) => {
      alert(err);
      replace("/");
    },
  });
};

export const useAddSnippetMutation = () =>
  useMutation(addSnippetAPI, {
    onSuccess: () => {
      window.location.replace("/snippets");
    },
  });

export const useEditSnippetMutation = ({ snippetId }: { snippetId: number }) =>
  useMutation(
    (reqData: SnippetFormType) => editSnippetAPI({ ...reqData, snippetId }),
    {
      onSuccess: () => {
        window.location.replace(`/snippets/${snippetId}`);
      },
    }
  );

export const useDeleteSnippetMutation = () =>
  useMutation(deleteSnippetAPI, {
    onSuccess: () => {
      window.location.replace("/snippets");
    },
  });
