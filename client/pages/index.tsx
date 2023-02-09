import type { NextPage } from "next";
import Head from "next/head";
import { useGetMainPost } from "Hooks/Post";
import styles from "./styles.module.scss";
import AsyncBoundary from "components/_hoc/AsyncErrorBoundary";
import ErrorHelper from "components/Block/errorHelper";
import ScrollBtn from "components/Atom/scrollBtn";
import ListPageContainer from "components/Block/ListPageContainer";
import Visitor from "components/Block/ListPageContainer/sideBar/Visitor";
import TopViewsPosts from "components/Block/ListPageContainer/sideBar/TopViewsPosts";
import RecentComments from "components/Block/ListPageContainer/sideBar/RecentComment";
import RecentTags from "components/Block/ListPageContainer/sideBar/RecentTags";

const Home: NextPage = () => {
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
            <ListPageContainer.Posts query={useGetMainPost} />
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

export default Home;
