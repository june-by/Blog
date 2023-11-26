import { SnippetFormType } from "@Types";
import { useMutation } from "@tanstack/react-query";
import {
  addSnippetAPI,
  deleteSnippetAPI,
  editSnippetAPI,
} from "@services/snippet";

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
