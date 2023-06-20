import { useWriteContext } from "context/writeContext";
import { useAddPost, useEditPost } from "Hooks/Post";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";

const SubmitButton = () => {
  const { query } = useRouter();
  const mode = query.mode as "Write" | "Edit";
  const { writeFormData } = useWriteContext();

  const AddPostMutation = useAddPost();
  const EditPostMutation = useEditPost();

  const submitPost = () => {
    const mutation = mode === "Write" ? AddPostMutation : EditPostMutation;
    const mutationPromiseMessage = MUTATION_MESSAGE[mode];
    const mutatiotPromise = mutation.mutateAsync(writeFormData);

    toast.promise(mutatiotPromise, mutationPromiseMessage);
  };

  return <button onClick={submitPost}>등록</button>;
};

const MUTATION_MESSAGE = {
  Write: {
    pending: "생성중입니다.",
    success: "생성이 완료되었습니다.",
    error: "생성 중 오류가 발생했습니다.",
  },
  Edit: {
    pending: "수정중입니다.",
    success: "수정이 완료되었습니다.",
    error: "수정 중 오류가 발생했습니다.",
  },
};

export default SubmitButton;
