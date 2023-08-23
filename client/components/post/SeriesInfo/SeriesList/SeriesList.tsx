import { MainPost } from "Types/post";
import React from "react";
import styles from "./styles.module.scss";
import { usePostContext } from "context/postContext";
import Link from "next/link";

const SeriesList = ({ seriesPosts }: Pick<MainPost, "seriesPosts">) => {
  const {
    Post: { id: currentPostId },
  } = usePostContext();
  return (
    <ol className={styles.SeriesList}>
      {seriesPosts.map(({ id, title }) => (
        <li
          key={id}
          className={
            isCurrentPost(currentPostId, id) ? `${styles.current}` : ""
          }
        >
          <Link href={`/post/${id}`}>{title}</Link>
        </li>
      ))}
    </ol>
  );
};

const isCurrentPost = (currentPostId: number, id: number) =>
  currentPostId === id;

export default SeriesList;
