import type { NextPage } from "next";
import Head from "next/head";
import CategorySelect from "components/Block/CategorySelect";
import AdditionalInfoSectionRight from "components/Block/AdditionalInfoSectionRight";
import { useGetMainPost } from "Hooks/Post";
import styles from "./styles.module.scss";
import AdditionalInfoSectionLeft from "components/Block/AdditionalInfoSectionLeft";
import { PostsType } from "Types/Post";
import PostCard from "components/Block/PostCard";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import PostCardSkeleton from "components/Block/PostCard/Skeleton";
import useRestoreSrollPos from "Hooks/useRestoreScrollPos";
import POSTS_PER_PAGE from "constants/postsPerPage";

const Home: NextPage = () => {
  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } = useGetMainPost();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, hasNextPage]);

  useRestoreSrollPos();

  return (
    <>
      <Head>
        <meta
          name="description"
          content="👨‍💻 안녕하세요 사용자 친화적인 서비스를 개발하고 싶은 개발자 안병준의 블로그입니다."
        />
        <meta property="og:title" content="By_juun.com" />
        <meta
          property="og:description"
          content="👨‍💻 안녕하세요 사용자 친화적인 서비스를 개발하고 싶은 개발자 안병준의 블로그입니다."
        />
        <meta
          property="og:image"
          content={"https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/Original.png"}
        />
        <meta property="og:url" content="https://byjuun.com" />
      </Head>
      <main className={styles.HomeWrapper}>
        <AdditionalInfoSectionLeft />
        <section className={styles.HomeContentWrapper}>
          <CategorySelect />
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
        </section>
        <AdditionalInfoSectionRight />
      </main>
    </>
  );
};

export default Home;
