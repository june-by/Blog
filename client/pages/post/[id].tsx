import { GetServerSideProps, GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { dehydrate, QueryClient } from "react-query";
import { getAllPostsId, getOnePostAPI } from "services/Post";
import CommentForm from "components/Block/Post/CommentForm";
import CommentList from "components/Block/Post/CommentList";
import OtherPostInfo from "components/Block/Post/OtherPostInfo";
import PostContent from "components/Block/Post/PostContent";
import PostTop from "components/Block/Post/PostTop";
import { useGetOnePost } from "Hooks/Post";
import { MainPost } from "Types/post";
import ScrollBtn from "components/Atom/scrollBtn";
import styles from "./styles.module.scss";
import S3_PREFIX from "constants/s3Prefix";
import THUMBNAIL from "constants/thumbnail";
import QUERY_KEY from "constants/queryKey";
import PostSkeleton from "components/Block/Post/Skeleton";

const Post = () => {
  const router = useRouter();
  const { data, isLoading, isError, refetch, error } = useGetOnePost(Number(router.query.id));
  const Post = data?.mainPost;

  useEffect(() => {
    if (!isError) return;
    alert(error);
    router.push("/");
  }, [error, isError, router]);

  if (isLoading || router.isFallback) return <PostSkeleton />;

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
        <PostContent content={Post?.content || ""} />
        <OtherPostInfo />
        <CommentForm />
        <CommentList Comments={Post?.Comments || [null]} />
        <ScrollBtn />
      </main>
    </>
  );
};

export const getStaticPaths = async () => {
  try {
    const data = await getAllPostsId();
    const paths = data.map(({ id }) => {
      return { params: { id: String(id) } };
    });
    return {
      paths,
      fallback: true,
    };
  } catch (err) {
    return {
      paths: [],
      fallback: true,
    };
  }
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([QUERY_KEY.POST.ONE, Number(context.params?.id)], () =>
    getOnePostAPI(Number(context.params?.id))
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60,
  };
};

export default Post;

function getOgImage(url: string | null | undefined, category: string) {
  if (url === "" || url === "null" || url === "undefined" || !url) return S3_PREFIX + THUMBNAIL[category]?.jpg;
  else return url;
}
