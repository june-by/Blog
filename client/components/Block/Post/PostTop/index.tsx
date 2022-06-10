import React from "react";
import { useGetUserInfo } from "../../../../Hooks/User";
import { PostType } from "../../../../Types/Post";
import { dateForm } from "../../../../utils/dateForm";
import CategoryChip from "../../../Atom/CategoryChip";
import GoBackBtn from "../../../Atom/GoBackBtn";
import PostDelBtn from "../../../Atom/PostDelBtn";
import PostEditBtn from "../../../Atom/PostEditBtn";
import PostTagBtn from "../../../Atom/PostTagBtn";
import styles from "./styles.module.scss";

interface Props {
  Post: PostType;
}

const PostTop = ({ Post }: Props) => {
  const { title, createdAt, category, Tags, id } = Post;
  const { data: UserInfo } = useGetUserInfo();

  return (
    <div className={styles.PostTop}>
      <div className={styles.TopArea}>
        <div>
          <GoBackBtn />
        </div>
        <div>
          {UserInfo?.nickname === "By_juun" && (
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
        <div className={styles.AdditionalInfo_Tag}>{Tags.length !== 0 && Tags.map((tag) => <PostTagBtn tag={tag} />)}</div>
      </div>
    </div>
  );
};

export default PostTop;
