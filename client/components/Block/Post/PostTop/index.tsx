import React from "react";
import { MainPost } from "Types/post";
import dateForm from "utils/dateForm";
import CategoryChip from "components/Atom/CategoryChip";
import GoBackBtn from "components/Atom/GoBackBtn";
import PostTagBtn from "components/Atom/PostTagBtn";
import styles from "./styles.module.scss";
import PostAdminButtons from "../PostAdminButtons";
import PostViewCount from "components/Atom/PostViewCount";

interface Props {
  Post: MainPost;
}

const PostTop = ({ Post }: Props) => {
  const { title, createdAt, category, Tags } = Post;

  return (
    <header className={styles.PostTop}>
      <div className={styles.TopArea}>
        <GoBackBtn />
        <PostAdminButtons />
      </div>
      <h1 className={styles.PostTitle}>{title}</h1>
      <div className={styles.AdditionalInfo}>
        <div className={styles.AdditionalInfo_top}>
          <span className={styles.AdditionalInfo_createdAt}>{dateForm(createdAt)}</span>
          <CategoryChip category={category} mode="post" />
        </div>
        <ul className={styles.AdditionalInfo_Tag}>
          {Tags.length !== 0 && Tags.map((tag) => <PostTagBtn key={tag?.id} tag={tag} />)}
        </ul>
        <PostViewCount />
      </div>
    </header>
  );
};

export default PostTop;
