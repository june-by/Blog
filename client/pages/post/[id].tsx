import { GetServerSideProps, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { dehydrate, QueryClient } from "react-query";
import { getOnePostAPI } from "../../API/Post";
import CommentForm from "../../components/Block/Post/CommentForm";
import CommentList from "../../components/Block/Post/CommentList";
import PostContent from "../../components/Block/Post/PostContent";
import PostTop from "../../components/Block/Post/PostTop";
import { useGetOnePost } from "../../Hooks/Post";
import { ScrollBtn } from "../../utils/scrollBtn/scrollBtn";
import styles from "./styles.module.scss";

const Post = () => {
  const { query } = useRouter();

  const { data: Post, isLoading } = useGetOnePost(Number(query.id));
  return (
    <div className={styles.Post}>
      {!isLoading ? (
        <>
          <PostTop title={Post.title} category={Post.category} createdAt={Post.createdAt} />
          <PostContent content={Post.content} />
          <CommentForm />
          <CommentList Comments={Post.Comments} />
          <ScrollBtn />
        </>
      ) : (
        <></>
      )}
    </div>
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
