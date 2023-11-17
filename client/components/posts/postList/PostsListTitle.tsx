import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import React from "react";
import styles from "./styles.module.scss";
import FontAppliedElement from "@components/shared/FontAppliedElement";

const PostsListTitle = () => {
  const searchParams = useSearchParams();
  const title = getTitle(searchParams);
  return (
    <FontAppliedElement tagName="h2" className={styles.PostListTitle}>
      {title}
    </FontAppliedElement>
  );
};

export default PostsListTitle;

function getTitle(searchParams: ReadonlyURLSearchParams | null) {
  if (searchParams?.get("search")) {
    return `🔍 Search : ${searchParams?.get("search")}`;
  } else if (searchParams?.get("tag")) {
    return `🔗 Tag : ${searchParams?.get("tag")}`;
  } else if (searchParams?.get("category")) {
    return `📚 Category : ${searchParams?.get("category")}`;
  } else if (searchParams?.get("series")) {
    return `✍ Series : ${searchParams?.get("series")}`;
  } else {
    return `📝 All Posts`;
  }
}
