import React from "react";
import { useGetUserInfo } from "Hooks/User";
import { MainPost } from "Types/post";
import dateForm from "utils/dateForm";
import CategoryChip from "components/Atom/CategoryChip";
import GoBackBtn from "components/Atom/GoBackBtn";
import PostDelBtn from "components/Atom/PostDelBtn";
import PostEditBtn from "components/Atom/PostEditBtn";
import PostTagBtn from "components/Atom/PostTagBtn";
import styles from "./styles.module.scss";

interface Props {
  Post: MainPost;
}

const PostTop = ({ Post }: Props) => {
  const { title, createdAt, category, Tags, id } = Post;
  const { data: UserInfo } = useGetUserInfo();

  return (
    <header className={styles.PostTop}>
      <div className={styles.TopArea}>
        <GoBackBtn />
        <div>
          {UserInfo?.nickname == "By_juun" && (
            <>
              <PostDelBtn />
              <PostEditBtn id={id} />
            </>
          )}
        </div>
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
        <div className={styles.AdditionalInfo_Views}>
          <span>조회수 : {Post.views + 1}</span>
        </div>
      </div>
    </header>
  );
};

export default PostTop;
