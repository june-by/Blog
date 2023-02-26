import React from "react";
import { PostsType } from "Types/post";
import dateForm from "utils/dateForm";
import PostTagBtn from "components/Atom/PostTagBtn";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import S3_PREFIX from "constants/s3Prefix";
import THUMBNAIL from "constants/thumbnail";
import MESSAGE from "constants/message";
import { useGetUserInfo } from "Hooks/User";
import IsAdmin from "utils/isAdmin";
import Link from "next/link";

const PostCard = ({ post }: { post: PostsType }) => {
  const router = useRouter();
  const { data: UserInfo } = useGetUserInfo();

  const onClickPostCard = () => {
    if (post.isPublic === 0 && !IsAdmin(UserInfo)) return alert(MESSAGE.NOT_READY_POST);
    const { scrollY } = window;
    const { pathname } = router;
    sessionStorage.setItem("scrollPos", JSON.stringify({ scrollY, pathname }));
  };

  return (
    <Link href={`/post/${post.id}`} data-testid="postCard" className={styles.PostCard} onClick={onClickPostCard}>
      <figure className={styles.PostCard_imgWrapper}>
        {post.thumbNailUrl && post.thumbNailUrl !== "null" ? (
          <Image src={post.thumbNailUrl} fill alt="category" placeholder="blur" blurDataURL={blurDataURL} />
        ) : (
          <picture>
            <source data-srcset={S3_PREFIX + THUMBNAIL[post.category]?.webp} type="image/webp" />
            <Image
              fill
              src={S3_PREFIX + THUMBNAIL[post.category]?.jpg}
              alt="category"
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
          </picture>
        )}
      </figure>
      <article className={styles.PostCard_titleBox}>
        <h2 className={styles.PostCard_titleBox_title}>{post.title}</h2>
        <ul className={styles.PostCard_titleBox_tagBox}>
          {post.isPublic === 1 ? (
            <>
              {post.Tags.length !== 0 &&
                post.Tags.map((tag) => <PostTagBtn key={`${post.title}#${tag?.content}`} tag={tag} />)}
            </>
          ) : (
            <span className={styles.prepare}>준비중</span>
          )}
        </ul>
        <div className={styles.PostCard_titleBox_createdAt}>
          <time>{dateForm(post.createdAt)}</time>
          <span>조회수 : {post.isPublic ? post.views : 0}</span>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;

const blurDataURL =
  "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==";
