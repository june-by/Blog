import Head from "next/head";
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
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>{query.content} 태그 검색 결과</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content={`총 ${TagPost?.length || 0}개의 게시글`} />
        <meta property="og:title" content={`${query.content} 태그로 검색한 결과`} />
        <meta property="og:description" content={`총 ${TagPost?.length || 0}개의 게시글`} />
        <meta property="og:image" content={"/original.png"} />
        <meta property="og:url" content={`https://byjuun.com/searcg/${query.search}`} />
      </Head>
      <div className={styles.TagPostWrapper}>
        <CategorySelect />
        <Posts posts={TagPost} isLoading={isLoading} />
      </div>
    </>
  );
};

export default Tag;
