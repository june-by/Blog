import React from "react";
import styles from "./styles.module.scss";
import { PostsType } from "Types/post";
import Link from "next/link";
import isNull from "utils/isNull";
import S3_PREFIX from "constants/s3Prefix";
import Image from "next/image";
import THUMBNAIL from "constants/thumbnail";
import TagButton from "components/shared/tagButton";
import { AiOutlineEye } from "react-icons/ai";
import dateForm from "utils/dateForm";

interface Props {
  post: PostsType;
}

const PostCard = ({ post }: Props) => {
  const { thumbNailUrl, title, category } = post;
  const isThumbNailExist = !isNull(thumbNailUrl);

  return (
    <Link href={`/post/${post.id}`} className={styles.PostCard}>
      <figure className={styles.thumbnailImgWrapper}>
        {isThumbNailExist ? (
          <Image
            src={thumbNailUrl as string}
            fill
            alt="category"
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        ) : (
          <picture>
            <source
              data-srcset={S3_PREFIX + THUMBNAIL[category]?.webp}
              type="image/webp"
            />
            <Image
              fill
              src={S3_PREFIX + THUMBNAIL[category]?.jpg}
              alt="category"
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
          </picture>
        )}
      </figure>
      <article className={styles.articleWrap}>
        <div>
          <h2>{title}</h2>
          <ul className={styles.tagListWrap}>
            {post.isPublic ? (
              <>
                {post.Tags.length !== 0 &&
                  post.Tags.map((tag) => (
                    <TagButton
                      key={`${post.title}#${tag?.content}`}
                      tag={tag}
                    />
                  ))}
              </>
            ) : (
              <span className={styles.prepare}>준비중</span>
            )}
          </ul>
        </div>
        <span className={styles.shortDescription}></span>
        <div className={styles.bottom}>
          <time>{dateForm(post.createdAt)}</time>
          <div>
            <AiOutlineEye />
            <span> {post.isPublic ? post.views : 0}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;
const blurDataURL =
  "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==";
