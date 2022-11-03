import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import CategorySelect from "../components/block/CategorySelect";
import Pagination from "../components/block/Pagination";
import Posts from "../components/block/Posts";
import AdditionalInfoSectionRight from "../components/block/AdditionalInfoSectionRight";
import { useGetPostNum, useGetMainPost } from "../Hooks/Post";
import styles from "./styles.module.scss";
import AdditionalInfoSectionLeft from "../components/block/AdditionalInfoSectionLeft";

const Home: NextPage = () => {
  const { query } = useRouter();
  const { data: totalPageNum } = useGetPostNum("main");
  const { data: MainPosts, isLoading } = useGetMainPost(Number(query.page) || 1);
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
        <AdditionalInfoSectionLeft />
        <div className={styles.HomeContentWrapper}>
          <CategorySelect />
          <Posts posts={MainPosts} isLoading={isLoading} />
          <Pagination totalPage={totalPageNum} />
        </div>
        <AdditionalInfoSectionRight />
      </div>
    </>
  );
};

export default Home;
