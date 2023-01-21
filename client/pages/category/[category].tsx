import { useGetCategoryPosts } from "Hooks/Post";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styles from "../styles.module.scss";
import { useInView } from "react-intersection-observer";
import AdditionalInfoSectionLeft from "components/Block/AdditionalInfoSectionLeft";
import AdditionalInfoSectionRight from "components/Block/AdditionalInfoSectionRight";
import PostCardSkeleton from "components/Block/PostCard/Skeleton";
import { PostsType } from "Types/post";
import CategorySelect from "components/Block/CategorySelect";
import PostCard from "components/Block/PostCard";
import NoPost from "components/Block/NoPost";
import useRestoreSrollPos from "Hooks/useRestoreScrollPos";
import POSTS_PER_PAGE from "constants/postsPerPage";

const Category = () => {
  const router = useRouter();
  const { category } = router.query;
  const { ref, inView } = useInView();
  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } = useGetCategoryPosts(category);

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, hasNextPage]);

  useRestoreSrollPos();
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
          {isPostExist(data?.pages[0]) ? (
            <section className={styles.PostsRoot}>
              {data?.pages.map((page) => (
                <>
                  {page.map((post: PostsType) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </>
              ))}
              {isFetchingNextPage || isLoading ? (
                <>
                  {Array.from({ length: POSTS_PER_PAGE }, () => 0).map((_, idx) => {
                    return <PostCardSkeleton key={`postCardSkeleton${idx}`} />;
                  })}
                </>
              ) : (
                <div ref={ref}></div>
              )}
            </section>
          ) : (
            <NoPost />
          )}
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
