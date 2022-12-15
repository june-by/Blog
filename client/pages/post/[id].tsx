import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { dehydrate, QueryClient } from "react-query";
import { getOnePostAPI } from "API/Post";
import CommentForm from "components/Block/Post/CommentForm";
import CommentList from "components/Block/Post/CommentList";
import OtherPostInfo from "components/Block/Post/OtherPostInfo";
import PostContent from "components/Block/Post/PostContent";
import PostTop from "components/Block/Post/PostTop";
import { useGetOnePost } from "Hooks/Post";
import { MainPost } from "Types/Post";
import { getOgImage } from "utils/getOgImage";
import ScrollBtn from "components/Atom/scrollBtn";
import styles from "./styles.module.scss";

const Post = () => {
  const router = useRouter();
  const { data, isLoading } = useGetOnePost(Number(router.query.id));
  const Post = data?.mainPost;

  if (isLoading) return <></>;

  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>{Post?.title}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content={Post?.content.substring(0, 100)} />
        <meta property="og:title" content={Post?.title} />
        <meta property="og:image" content={getOgImage(Post?.thumbNailUrl, String(Post?.category))} />
        <meta property="og:url" content={`https://byjuun.com/post/${router.query.id}`} />
      </Head>
      <main className={styles.Post}>
        <PostTop Post={Post as MainPost} />
        <PostContent content={Post!.content} />
        <OtherPostInfo />
        <CommentForm />
        <CommentList Comments={Post!.Comments} />
        <ScrollBtn />
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["Post", Number(query.id)], () => getOnePostAPI(Number(query.id)));
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Post;
