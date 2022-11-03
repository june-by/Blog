import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import NoPost from "../../components/block/NoPost";
import CategorySelect from "../../components/block/CategorySelect";
import Pagination from "../../components/block/Pagination";
import Posts from "../../components/block/Posts";
import { useGetPostNum } from "../../hooks/Post";
import useGetPosts from "../../hooks/useGetPosts";
import useMakeMetaInfo from "../../hooks/useMakeMetaInfo";
import styles from "./styles.module.scss";
import { PostsType } from "../../Types/Post";
import AdditionalInfoSectionRight from "../../components/block/AdditionalInfoSectionRight";
import AdditionalInfoSectionLeft from "../../components/block/AdditionalInfoSectionLeft";

const Filter = () => {
  const { query } = useRouter();
  const { data: totalPageNum } = useGetPostNum(query.category);
  const [Post, isLoading] = useGetPosts(query);
  const [title, description, ogDescription, url] = useMakeMetaInfo();

  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content={String(description)} />
        <meta property="og:title" content={String(description)} />
        <meta property="og:description" content={String(ogDescription)} />
        <meta property="og:image" content={"https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/Original.png"} />
        <meta property="og:url" content={String(url)} />
      </Head>
      <div className={styles.CategoryWrapper}>
        <AdditionalInfoSectionLeft />
        <div className={styles.CategoryContentWrapper}>
          <CategorySelect />
          <Posts posts={Post as PostsType[]} isLoading={isLoading} />
          <NoPost isPostExist={Post?.length !== 0 ? true : false} />
          {query.category && <Pagination totalPage={totalPageNum} />}
        </div>
        <AdditionalInfoSectionRight />
      </div>
    </>
  );
};

export default Filter;
