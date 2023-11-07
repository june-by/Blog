"use client";

import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { getAllPosts } from "@services/post";
import { getYearMonthDate, groupBy } from "@utils";

interface Props {
  posts?: NonNullable<Awaited<ReturnType<typeof getAllPosts>>>["data"];
}

const PostsArchive = ({ posts }: Props) => {
  if (!posts) {
    return null;
  }

  const years = sortByYearDesc(Object.keys(posts));

  return (
    <div>
      <div className={styles.PostsListWrap}>
        {years.map((year) => (
          <div className={styles.PostsList} key={year}>
            <h3>
              {year} ({posts[year].length})
            </h3>
            <div className={styles.Posts}>
              {posts[year].map(({ title, date, id }) => (
                <Link href={`/post/${id}`} className={styles.Post} key={title}>
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
const sortByYearDesc = (keys: string[]) =>
  keys.sort((a, b) => Number(b) - Number(a));

export default PostsArchive;
