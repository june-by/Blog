import Head from "next/head";
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
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>{query.search} 검색 결과</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content={`총 ${SearchPosts?.length || 0}개의 게시글`} />
        <meta property="og:title" content={`${query.search}로 검색한 결과`} />
        <meta property="og:description" content={`총 ${SearchPosts?.length || 0}개의 게시글`} />
        <meta property="og:image" content={"/original.png"} />
        <meta property="og:url" content={`https://byjuun.com/searcg/${query.search}`} />
      </Head>
      <div className={styles.SearchWrapper}>
        <CategorySelect />
        <Posts posts={SearchPosts} isLoading={isLoading} />
      </div>
    </>
  );
};

export default Search;
