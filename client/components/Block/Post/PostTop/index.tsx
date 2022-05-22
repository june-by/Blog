import React from "react";
import useGotoPage from "../../../../Hooks/useGotoPage";
import { useGetUserInfo } from "../../../../Hooks/User";
import { PostType, TagType } from "../../../../Types/Post";
import { dateForm } from "../../../../utils/dateForm";
import GoBackBtn from "../../../Atom/GoBackBtn";
import PostDelBtn from "../../../Atom/PostDelBtn";
import PostEditBtn from "../../../Atom/PostEditBtn";
import styles from "./styles.module.scss";

interface Props {
  Post: PostType;
}

const PostTop = ({ Post }: Props) => {
  const gotoPage = useGotoPage();
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
        <span className={styles.AdditionalInfo_createdAt}>{dateForm(createdAt)}</span>
        <button onClick={gotoPage(`/category/${category}`)}>{category}</button>
        <div className={styles.AdditionalInfo_Tag}>
          {Tags.length !== 0 &&
            Tags.map((tag) => {
              return (
                <span key={tag?.id} onClick={gotoPage(`/tag/${String(tag?.content)}`)}>
                  #{tag?.content}{" "}
                </span>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PostTop;
