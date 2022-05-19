import { GetServerSideProps, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { dehydrate, QueryClient } from "react-query";
import { getOnePostAPI } from "../../API/Post";
import PostTop from "../../components/Block/Post/PostTop";
import { useGetOnePost } from "../../Hooks/Post";
import styles from "./styles.module.scss";

const Post = () => {
  const { query } = useRouter();
  console.log(query.id);
  const { data: Post, isLoading } = useGetOnePost(Number(query.id));
  return <div className={styles.Post}>{!isLoading ? <PostTop title={Post.title} category={Post.category} createdAt={Post.createdAt} /> : <></>}</div>;
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
