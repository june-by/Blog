import type { NextPage } from "next";
import Head from "next/head";
import { useGetMainPost } from "Hooks/Post";
import styles from "./styles.module.scss";
import ScrollButton from "components/shared/scrollButton";
import ListPageContainer from "components/ListPageContainer";
import Visitor from "components/ListPageContainer/sideBar/Visitor";
import TopViewsPosts from "components/ListPageContainer/sideBar/TopViewsPosts";
import RecentComments from "components/ListPageContainer/sideBar/RecentComment";
import RecentTags from "components/ListPageContainer/sideBar/RecentTags";

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
          <ListPageContainer.Posts query={useGetMainPost} />
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
      <ScrollButton />
    </>
  );
};

export default Home;
