import React from "react";
import TagButton from "components/shared/tagButton";
import styles from "./styles.module.scss";
import PostViewCount from "components/post/PostHeader/PostViewCount";
import { usePostContext } from "context/postContext";

const PostHeader = () => {
  const { Tags } = usePostContext();
  return (
    <>
      <div className={styles.AdditionalInfo}>
        <ul className={styles.AdditionalInfo_Tag}>
          {Tags.length !== 0 &&
            Tags.map((tag) => <TagButton key={tag?.id} tag={tag} />)}
        </ul>
        <PostViewCount />
      </div>
    </>
  );
};

export default PostHeader;
