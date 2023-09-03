import { SnippetFormType } from "Types/snippets";
import MESSAGE from "constants/message";
import { useMutation } from "react-query";
import { addSnippetAPI, editSnippetAPI } from "services/snippet/snippet.service";

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
