import React from "react";
import styles from "./styles.module.scss";
import { usePostContext } from "@contexts/postContext";
import TagButton from "components/shared/tagButton";

const PostTags = () => {
  const { Tags } = usePostContext();

  if (!Tags) {
    return null;
  }

  if (Tags.length === 0) {
    return null;
  }

  return (
    <ul className={styles.PostTags}>
      {Tags.map((tag) => (
        <TagButton key={tag?.id} tag={tag} />
      ))}
    </ul>
  );
};

export default PostTags;
