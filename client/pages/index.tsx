import type { NextPage } from "next";
import Head from "next/head";
import CategorySelect from "components/Block/CategorySelect";
import AdditionalInfoSectionRight from "components/Block/AdditionalInfoSectionRight";
import { useGetMainPost } from "Hooks/Post";
import styles from "./styles.module.scss";
import AdditionalInfoSectionLeft from "components/Block/AdditionalInfoSectionLeft";
import AsyncBoundary from "components/_hoc/AsyncErrorBoundary";
import ErrorHelper from "components/Block/errorHelper";
import InfinitePosts from "components/Block/infinitePosts";

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
      <main className={styles.HomeWrapper}>
        <AdditionalInfoSectionLeft />
        <section className={styles.HomeContentWrapper}>
          <CategorySelect />
          <AsyncBoundary suspenseFallback={<></>} errorFallback={(props) => <ErrorHelper {...props} />}>
            <InfinitePosts query={useGetMainPost} />
          </AsyncBoundary>
        </section>
        <AdditionalInfoSectionRight />
      </main>
    </>
  );
};

export default Home;
