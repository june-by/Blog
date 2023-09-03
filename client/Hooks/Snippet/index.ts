import { SnippetFormType, SnippetType } from "Types/snippets";
import CACHE_OPTION from "constants/cacheOption";
import MESSAGE from "constants/message";
import QUERY_KEY from "constants/queryKey";
import { useMutation, useQuery } from "react-query";
import { addSnippetAPI, editSnippetAPI, getSnippetAPI } from "services/snippet/snippet.service";

export const useGetSnippetQuery = ({ id }: Pick<SnippetType, "id">) =>
  useQuery([QUERY_KEY.SNIPPET, id], () => getSnippetAPI({ id }), { ...CACHE_OPTION.ALL });

export const useAddSnippetMutation = () =>
  useMutation(addSnippetAPI, {
    onSuccess: () => {
      alert(MESSAGE.POST_REGIST_SUCCESS);
      window.location.replace("/snippet");
    },
  });

export const useEditSnippetMutation = ({ snippetId }: { snippetId: number }) =>
  useMutation((reqData: SnippetFormType) => editSnippetAPI({ ...reqData, snippetId }), {
    onSuccess: () => {
      alert(MESSAGE.POST_EDIT_SUCCESS);
      window.location.replace("/snippets");
    },
  });
