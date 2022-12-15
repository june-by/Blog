import React, { useContext, useEffect, useMemo, useRef } from "react";
import useGotoPage from "Hooks/useGotoPage";
import { useImageLazyLoading } from "Hooks/useImageLazyLoading";
import { PostsType } from "Types/Post";
import { dateForm } from "utils/dateForm";
import { getThumbNail } from "utils/getThumbnail";
import { ThemeContext } from "utils/ThemeContext";
import { S3_PREFIX } from "utils/variable";
import PostTagBtn from "components/Atom/PostTagBtn";
import styles from "./styles.module.scss";

const PostCard = ({ post }: { post: PostsType }) => {
  const gotoPage = useGotoPage();
  const thumbNailRef = useRef<HTMLImageElement | null>(null);
  const { theme } = useContext(ThemeContext);
  const defaultThumbNail = useMemo(() => getThumbNail(post.category), [post]);

  useImageLazyLoading(thumbNailRef);

  return (
    <section
      data-testid="postCard"
      className={`${styles.PostCard} ${styles[theme]}`}
      onClick={gotoPage(`/post/${post.id}`)}
    >
      <figure className={styles.PostCard_imgWrapper}>
        {post.thumbNailUrl && post.thumbNailUrl !== "null" ? (
          <img src={post.thumbNailUrl} />
        ) : (
          <picture>
            <source data-srcset={S3_PREFIX + defaultThumbNail.webp} type="image/webp" />
            <img ref={thumbNailRef} data-src={S3_PREFIX + defaultThumbNail.jpg} alt="category" />
          </picture>
        )}
      </figure>
      <article className={`${styles.PostCard_titleBox} ${styles[`${theme}titleBox`]}`}>
        <h2 className={styles.PostCard_titleBox_title}>{post.title}</h2>
        <ul className={styles.PostCard_titleBox_tagBox}>
          {post.Tags.length !== 0 && post.Tags.map((tag) => <PostTagBtn key={tag?.id} tag={tag} />)}
        </ul>
        <div className={styles.PostCard_titleBox_createdAt}>
          <time>{dateForm(post.createdAt)}</time>
          <span>조회수 : {post.views}</span>
        </div>
      </article>
    </section>
  );
};

export default PostCard;
