import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { useGetUserInfo } from "../../../../Hooks/User";
import { PostType } from "../../../../Types/Post";
import { dateForm } from "../../../../utils/dateForm";
import GoBackBtn from "../../../Atom/GoBackBtn";
import PostDelBtn from "../../../Atom/PostDelBtn";
import PostEditBtn from "../../../Atom/PostEditBtn";
import styles from "./styles.module.scss";

interface Props {
  Post: PostType;
}

const PostTop = ({ Post }: Props) => {
  const router = useRouter();
  const { title, createdAt, category, Tags, id } = Post;
  const { data: UserInfo } = useGetUserInfo();

  const onClickTag = useCallback(
    (tag) => () => {
      router.push({
        pathname: "/filter",
        query: { tag: tag },
      });
    },
    [router]
  );

  const onClickCategory = useCallback(
    (category: string) => () => {
      router.push({
        pathname: "/filter",
        query: { category: category },
      });
    },
    []
  );

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
        <button onClick={onClickCategory(category)}>{category}</button>
        <div className={styles.AdditionalInfo_Tag}>
          {Tags.length !== 0 &&
            Tags.map((tag) => {
              return (
                <span key={tag?.id} onClick={onClickTag(tag?.content)}>
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
