import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { dehydrate, QueryClient } from "react-query";
import { getMainPostsAPI } from "../API/Post";
import CategorySelect from "../components/Block/CategorySelect";
import Pagination from "../components/Block/Pagination";
import Posts from "../components/Block/Posts";
import { useGetPostNum, useGetMainPost } from "../Hooks/Post";
import { PostType } from "../Types/Post";
import styles from "./styles.module.scss";

const Home: NextPage = () => {
  const { query } = useRouter();
  const { data: totalPageNum } = useGetPostNum("main");
  const { data: MainPosts } = useGetMainPost(Number(query.page) || 1);

  return (
    <>
      <Head>
        <meta name="description" content="👨‍💻 안녕하세요 사용자 친화적인 서비스를 개발하고 싶은 개발자 안병준의 블로그입니다." />
        <meta property="og:title" content="By_juun.com" />
        <meta property="og:description" content="👨‍💻 안녕하세요 사용자 친화적인 서비스를 개발하고 싶은 개발자 안병준의 블로그입니다." />
        <meta property="og:image" content={"https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/Original.png"} />
        <meta property="og:url" content="https://byjuun.com" />
      </Head>
      <div className={styles.HomeWrapper}>
        <CategorySelect />
        <Posts posts={MainPosts as PostType[]} />
        <Pagination totalPage={totalPageNum} />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const queryClient = new QueryClient();
  const page = query.page ? Number(query.page) : 1;
  await queryClient.prefetchQuery(["MainPosts", page], () => getMainPostsAPI(page));
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;
