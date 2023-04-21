import type { NextPage } from "next";
import Head from "next/head";
import { useGetMainPost } from "Hooks/Post";
import ScrollButton from "components/shared/scrollButton";
import PostsPageContainer from "components/posts";

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
      <PostsPageContainer query={useGetMainPost} />
      <ScrollButton />
    </>
  );
};

export default Home;
