import { useWriteContext } from "context/writeContext";
import { useAddPost, useEditPost } from "Hooks/Post";
import { useRouter } from "next/router";
import React from "react";

const SubmitButton = () => {
  const { query } = useRouter();
  const { writeSubmitData } = useWriteContext();

  const AddPostMutation = useAddPost();
  const EditPostMutation = useEditPost();

  const submitPost = () => {
    if (query.mode === "Write") AddPostMutation.mutate(writeSubmitData);
    else EditPostMutation.mutate(writeSubmitData);
  };

  return <button onClick={submitPost}>등록</button>;
};

export default SubmitButton;
