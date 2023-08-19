import { PostsPageQueryType } from "Types/page";
import { useRouter } from "next/router";
import React from "react";
import styles from "./styles.module.scss";

const PostsListTitle = () => {
  const { query } = useRouter();
  const title = getTitle(query);
  return <h2 className={styles.PostListTitle}>{title}</h2>;
};

export default PostsListTitle;

function getTitle(query: PostsPageQueryType) {
  if (query.search) return `🔍 Search : ${query.search}`;
  else if (query.tag) return `🔗 Tag : ${query.tag}`;
  else if (query.category) return `📚 Category : ${query.category}`;
  else if (query.series) return `✍ Series : ${query.series}`;
  else return `📝 All Posts`;
}
