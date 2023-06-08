import { GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { dehydrate, QueryClient } from "react-query";
import { getAllPostsId, getOnePostAPI } from "services/post";
import CommentForm from "components/post/CommentForm";
import CommentList from "components/post/CommentList";
import OtherPostInfo from "components/post/OtherPostInfo";
import PostContent from "components/post/PostContent";
import PostTop from "components/post/PostTop";
import { useGetOnePost } from "Hooks/Post";
import { MainPost } from "Types/post";
import ScrollButton from "components/shared/scrollButton";
import styles from "./styles.module.scss";
import S3_PREFIX from "constants/s3Prefix";
import THUMBNAIL from "constants/thumbnail";
import QUERY_KEY from "constants/queryKey";
import PostSkeleton from "components/post/Skeleton";
import { useGetUserInfo } from "Hooks/User";
import IsAdmin from "utils/isAdmin";
import MESSAGE from "constants/message";
import PostHeader from "components/post/postHeader";
import { PostContainer } from "context/postContext";

const Post = () => {
  const router = useRouter();

  const { data: userInfo, isLoading: userInfoLoadLoading } = useGetUserInfo();
  const { data } = useGetOnePost(Number(router.query.id));

  const Post = data?.mainPost;

  useEffect(() => {
    if (userInfoLoadLoading) return;
    if (!IsAdmin(userInfo) && Post?.isPublic === 0) {
      alert(MESSAGE.NOT_READY_POST);
      router.replace("/");
    }
  }, [Post?.isPublic, router, userInfo, userInfoLoadLoading]);

  if (router.isFallback) return <PostSkeleton />;

  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>{Post?.title}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content={Post?.content.substring(0, 100)} />
        <meta property="og:title" content={Post?.title} />
        <meta
          property="og:image"
          content={getOgImage(Post?.thumbNailUrl, String(Post?.category))}
        />
        <meta
          property="og:url"
          content={`https://byjuun.com/post/${router.query.id}`}
        />
      </Head>
      <PostContainer Post={Post as MainPost}>
        <main className={styles.Post}>
          <PostHeader />
          <PostTop />
          <PostContent />
          <OtherPostInfo />
          <CommentForm />
          <CommentList />
          <ScrollButton />
        </main>
      </PostContainer>
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

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const queryClient = new QueryClient();
  await queryClient.fetchQuery(
    [QUERY_KEY.POST.ONE, Number(context.params?.id)],
    () => getOnePostAPI(Number(context.params?.id))
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Post;

function getOgImage(url: string | null | undefined, category: string) {
  if (url === "" || url === "null" || url === "undefined" || !url)
    return S3_PREFIX + THUMBNAIL[category]?.jpg;
  else return url;
}
