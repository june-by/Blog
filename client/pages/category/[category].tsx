import React from "react";
import { useGetCategoryPosts } from "Hooks/Post";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles.module.scss";
import AdditionalInfoSectionLeft from "components/Block/AdditionalInfoSectionLeft";
import AdditionalInfoSectionRight from "components/Block/AdditionalInfoSectionRight";
import { PostsType } from "Types/post";
import CategorySelect from "components/Block/CategorySelect";
import InfinitePosts from "components/Block/infinitePosts";
import AsyncBoundary from "components/_hoc/AsyncErrorBoundary";
import ErrorHelper from "components/Block/errorHelper";

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
      <main className={styles.HomeWrapper}>
        <AdditionalInfoSectionLeft />
        <section className={styles.HomeContentWrapper}>
          <CategorySelect />
          <AsyncBoundary suspenseFallback={<></>} errorFallback={(props) => <ErrorHelper {...props} />}>
            <InfinitePosts query={useGetCategoryPosts} params={category} />
          </AsyncBoundary>
        </section>
        <AdditionalInfoSectionRight />
      </main>
    </>
  );
};

export default Category;

function isPostExist(data: PostsType[] | undefined) {
  return data?.length !== 0 ? true : false;
}
