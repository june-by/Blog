import React from "react";
import styles from "./styles.module.scss";
import TagButton from "@components/shared/tagButton";
import { PostType } from "@Types/post";

const PostTags = ({ Tags }: Pick<PostType, "Tags">) => {
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
