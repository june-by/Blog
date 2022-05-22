import { useRouter } from "next/router";
import React from "react";
import CategorySelect from "../../components/Block/CategorySelect";
import Posts from "../../components/Block/Posts";
import { useGetTagPosts } from "../../Hooks/Post";
import styles from "./styles.module.scss";

const Tag = () => {
  const { query } = useRouter();
  const { data: TagPost, isLoading } = useGetTagPosts(query.content as string);
  return (
    <div className={styles.TagPostWrapper}>
      <CategorySelect />
      <Posts posts={TagPost} isLoading={isLoading} />
    </div>
  );
};

export default Tag;
