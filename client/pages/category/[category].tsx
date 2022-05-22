import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import CategorySelect from "../../components/Block/CategorySelect";
import Pagination from "../../components/Block/Pagination";
import Posts from "../../components/Block/Posts";
import { useGetCategoryPosts, useGetPostNum } from "../../Hooks/Post";
import styles from "./styles.module.scss";

const Category = () => {
  const { query } = useRouter();
  const [pageNum, setPageNum] = useState<number>(1);
  const { data: CategoryPost, isLoading } = useGetCategoryPosts(query.category as string, pageNum);
  const { data: totalPageNum } = useGetPostNum(query.category as string);

  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>{query.category}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content={`${query.category}페이지`} />
        <meta property="og:title" content={`${query.category}페이지`} />
        <meta property="og:description" content={`${query.category}페이지`} />
        <meta property="og:image" content={"/original.png"} />
        <meta property="og:url" content={`https://byjuun.com/category/${query.category}`} />
      </Head>
      <div className={styles.CategoryWrapper}>
        <CategorySelect />
        <Posts posts={CategoryPost} isLoading={isLoading} />
        <Pagination totalPage={totalPageNum} pageNum={pageNum} setPageNum={setPageNum} />
      </div>
    </>
  );
};

export default Category;
