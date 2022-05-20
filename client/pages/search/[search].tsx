import { useRouter } from "next/router";
import React from "react";
import CategorySelect from "../../components/Block/CategorySelect";
import Posts from "../../components/Block/Posts";
import { useGetSearchPosts } from "../../Hooks/Post";
import styles from "./styles.module.scss";

const Search = () => {
  const { query } = useRouter();
  const { data: SearchPosts, isLoading } = useGetSearchPosts(String(query.search));

  return (
    <div className={styles.SearchWrapper}>
      <CategorySelect />
      <Posts posts={SearchPosts} isLoading={isLoading} />
    </div>
  );
};

export default Search;
