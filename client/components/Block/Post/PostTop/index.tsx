import React from "react";
import { useGetUserInfo } from "../../../../hooks/User";
import { MainPost } from "../../../../types/Post";
import { dateForm } from "../../../../utils/dateForm";
import CategoryChip from "../../../atom/CategoryChip";
import GoBackBtn from "../../../atom/GoBackBtn";
import PostDelBtn from "../../../atom/PostDelBtn";
import PostEditBtn from "../../../atom/PostEditBtn";
import PostTagBtn from "../../../atom/PostTagBtn";
import styles from "./styles.module.scss";

interface Props {
  Post: MainPost;
}

const PostTop = ({ Post }: Props) => {
  const { title, createdAt, category, Tags, id } = Post;
  const { data: UserInfo } = useGetUserInfo();

  return (
    <div className={styles.PostTop}>
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
        <div className={styles.AdditionalInfo_Tag}>{Tags.length !== 0 && Tags.map((tag) => <PostTagBtn key={tag?.id} tag={tag} />)}</div>
        <div className={styles.AdditionalInfo_Views}>
          <span>조회수 : {Post.views + 1}</span>
        </div>
      </div>
    </div>
  );
};

export default PostTop;
