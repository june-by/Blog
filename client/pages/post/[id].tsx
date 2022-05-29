import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import CommentForm from "../../components/Block/Post/CommentForm";
import CommentList from "../../components/Block/Post/CommentList";
import PostContent from "../../components/Block/Post/PostContent";
import PostTop from "../../components/Block/Post/PostTop";
import { PostType } from "../../Types/Post";
import { customAxios } from "../../utils/CustomAxios";
import { getPostThumbNail } from "../../utils/getPostThumnail";
import { ScrollBtn } from "../../utils/scrollBtn/scrollBtn";
import styles from "./styles.module.scss";

const Post = ({ Post }: { Post: PostType }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>{Post?.title}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content={Post?.content.substring(0, 100)} />
        <meta property="og:title" content={Post?.title} />
        <meta property="og:image" content={Post?.thumbNailUrl === "" ? getPostThumbNail(String(Post?.category)) : String(Post?.thumbNailUrl)} />
        <meta property="og:url" content={`https://byjuun.com/post/${router.query.id}`} />
      </Head>
      <div className={styles.Post}>
        <PostTop Post={Post} />
        <PostContent content={Post.content} />
        <CommentForm />
        <CommentList Comments={Post.Comments} />
        <ScrollBtn />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const res = await customAxios.get(`/post/load/${query.id}`);
    return {
      props: {
        Post: res.data,
      },
    };
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: {},
    };
  }
};

export default Post;
