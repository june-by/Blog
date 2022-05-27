import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { dehydrate, QueryClient } from "react-query";
import { getOnePostAPI } from "../../API/Post";
import CommentForm from "../../components/Block/Post/CommentForm";
import CommentList from "../../components/Block/Post/CommentList";
import PostContent from "../../components/Block/Post/PostContent";
import PostTop from "../../components/Block/Post/PostTop";
import { useGetOnePost } from "../../Hooks/Post";
import { getPostThumbNail } from "../../utils/getPostThumnail";
import { ScrollBtn } from "../../utils/scrollBtn/scrollBtn";
import styles from "./styles.module.scss";

const Post = () => {
  const { query } = useRouter();

  const { data: Post, isLoading } = useGetOnePost(Number(query.id));

  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>{Post?.title}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content={Post?.content.substring(0, 100)} />
        <meta property="og:title" content={Post?.title} />
        <meta property="og:description" content={Post?.content.substring(0, 100)} />
        <meta property="og:image" content={Post?.thumbNailUrl ?? getPostThumbNail(String(Post?.category))} />
        <meta property="og:url" content={`https://byjuun.com/post/${query.id}`} />
      </Head>
      <div className={styles.Post}>
        {!isLoading && Post ? (
          <>
            <PostTop Post={Post} />
            <PostContent content={Post.content} />
            <CommentForm />
            <CommentList Comments={Post.Comments} />
            <ScrollBtn />
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  // ...
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["Post", query.id], () => getOnePostAPI(Number(query.id)));
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default Post;
