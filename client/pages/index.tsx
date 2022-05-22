import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import CategorySelect from "../components/Block/CategorySelect";
import Pagination from "../components/Block/Pagination";
import Posts from "../components/Block/Posts";
import { useGetPostNum, useGetMainPost } from "../Hooks/Post";
import styles from "./styles.module.scss";

const Home: NextPage = () => {
  const [pageNum, setPageNum] = useState<number>(1);

  const { data: totalPageNum } = useGetPostNum("main");
  const { data: MainPosts, isLoading } = useGetMainPost(pageNum);

  return (
    <>
      <Head>
        <meta name="description" content="👨‍💻 안녕하세요 사용자 친화적인 서비스를 개발하고 싶은 개발자 안병준의 블로그입니다." />
        <meta property="og:title" content="By_juun.com" />
        <meta property="og:description" content="👨‍💻 안녕하세요 사용자 친화적인 서비스를 개발하고 싶은 개발자 안병준의 블로그입니다." />
        <meta property="og:image" content={"/original.png"} />
        <meta property="og:url" content="https://byjuun.com" />
      </Head>
      <div className={styles.HomeWrapper}>
        <CategorySelect />
        <Posts posts={MainPosts} isLoading={isLoading} />
        <Pagination totalPage={totalPageNum} pageNum={pageNum} setPageNum={setPageNum} />
      </div>
    </>
  );
};

export default Home;
