import React from "react";
import dateForm from "utils/dateForm";
import CategoryChip from "components/shared/categoryChip";
import TagButton from "components/shared/tagButton";
import styles from "./styles.module.scss";
import PostViewCount from "components/post/PostTop/PostViewCount";
import { usePostContext } from "context/postContext";

const PostTop = () => {
  const {
    Post: { title, createdAt, category, Tags },
  } = usePostContext();

  return (
    <header className={styles.PostTop}>
      <h1 className={styles.PostTitle}>{title}</h1>
      <div className={styles.AdditionalInfo}>
        <div className={styles.AdditionalInfo_top}>
          <span className={styles.AdditionalInfo_createdAt}>{dateForm(createdAt)}</span>
          <CategoryChip category={category} length={null} />
        </div>
        <ul className={styles.AdditionalInfo_Tag}>
          {Tags.length !== 0 && Tags.map((tag) => <TagButton key={tag?.id} tag={tag} />)}
        </ul>
        <PostViewCount />
      </div>
    </header>
  );
};

export default PostTop;
