import { useWriteContext } from "context/writeContext";
import React, { useRef } from "react";

const TagForm = () => {
  const tagRef = useRef<HTMLInputElement>(null);
  const { addTag } = useWriteContext();

  const submitTag = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!tagRef.current) return;
    addTag(tagRef.current.value);
    tagRef.current.value = "";
  };
  return (
    <form data-testid="tagSubmitForm" onSubmit={submitTag}>
      <input ref={tagRef} placeholder="tag" />
    </form>
  );
};

export default TagForm;
