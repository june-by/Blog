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

export const useEditSnippetMutation = () =>
  useMutation(editSnippetAPI, {
    onSuccess: () => {
      alert(MESSAGE.POST_EDIT_SUCCESS);
      window.location.replace("/snippet");
    },
  });
