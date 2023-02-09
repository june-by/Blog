import React from "react";
import { useGetCategoryPosts } from "Hooks/Post";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles.module.scss";
import AsyncBoundary from "components/_hoc/AsyncErrorBoundary";
import ErrorHelper from "components/Block/errorHelper";
import ScrollBtn from "components/Atom/scrollBtn";
import ListPageContainer from "components/Block/ListPageContainer";
import Visitor from "components/Block/ListPageContainer/sideBar/Visitor";
import TopViewsPosts from "components/Block/ListPageContainer/sideBar/TopViewsPosts";
import RecentComments from "components/Block/ListPageContainer/sideBar/RecentComment";
import RecentTags from "components/Block/ListPageContainer/sideBar/RecentTags";

const Category = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <>
      <Head>
        <title>{category}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content={`${category} 페이지`} />
        <meta property="og:title" content={`${category} 페이지`} />
        <meta property="og:description" content={`${category}페이지 목록입니다`} />
        <meta
          property="og:image"
          content={"https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/Original.png"}
        />
        <meta property="og:url" content={`https://byjuun.com/category/${category}`} />
      </Head>
      <ListPageContainer>
        <ListPageContainer.SideBar
          renderItems={
            <>
              <Visitor />
              <TopViewsPosts />
            </>
          }
        />
        <section className={styles.HomeContentWrapper}>
          <ListPageContainer.CategoryList />
          <AsyncBoundary suspenseFallback={<></>} errorFallback={(props) => <ErrorHelper {...props} />}>
            <ListPageContainer.Posts query={useGetCategoryPosts} params={category} />
          </AsyncBoundary>
        </section>
        <ListPageContainer.SideBar
          renderItems={
            <>
              <RecentComments />
              <RecentTags />
            </>
          }
        />
      </ListPageContainer>
      <ScrollBtn />
    </>
  );
};

export default Category;
