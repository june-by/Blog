import React from "react";
import dateForm from "utils/dateForm";
import TagButton from "components/shared/tagButton";
import styles from "./styles.module.scss";
import PostViewCount from "components/post/PostHeader/PostViewCount";
import { usePostContext } from "context/postContext";
import Link from "next/link";

const PostHeader = () => {
  const { createdAt, category, Tags } = usePostContext();
  return (
    <>
      <div className={styles.AdditionalInfo}>
        <div className={styles.AdditionalInfo_top}>
          <span className={styles.AdditionalInfo_createdAt}>
            {dateForm(createdAt)}
          </span>
          <Link className={styles.Category} href={`/?category=${category}`}>
            {category}
          </Link>
        </div>
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
