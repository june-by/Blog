import React from "react";
import styles from "./styles.module.scss";
import FontAppliedElement from "components/shared/FontAppliedElement";
import useArchivePosts from "./useArchivePosts";
import Link from "next/link";

const PostsArchive = () => {
  const data = useArchivePosts();

  if (!data) return null;

  const allPostsCount = getAllPostCount(data);

  return (
    <div>
      <FontAppliedElement tagName="h2">
        📝 Posts <span>({allPostsCount})</span>
      </FontAppliedElement>
      <div className={styles.PostsListWrap}>
        {Object.keys(data)
          .sort((a, b) => Number(b) - Number(a))
          .map((year) => (
            <div className={styles.PostsList} key={year}>
              <h3 key={year}>
                {year} ({data[year].length})
              </h3>
              <div className={styles.Posts}>
                {data[year].map(({ title, date, id }) => (
                  <Link
                    href={`/post/${id}`}
                    className={styles.Post}
                    key={title}
                  >
                    <div className={styles.date}>{date}</div>
                    <span className={styles.title}>{title}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

const getAllPostCount = (data: ReturnType<typeof useArchivePosts>) => {
  if (!data) return "";

  const keys = Object.keys(data);

  return keys.reduce((acc, cur) => acc + data[cur].length, 0);
};

export default PostsArchive;
