import { GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { dehydrate, QueryClient } from "react-query";
import { getAllPostsId, getPostAPI } from "services/post";
import { useGetPostQuery } from "Hooks/Post";
import ScrollButton from "components/shared/scrollButton";
import S3_PREFIX from "constants/s3Prefix";
import THUMBNAIL from "constants/thumbnail";
import QUERY_KEY from "constants/queryKey";
import { useGetUserQuery } from "Hooks/User";
import IsAdmin from "utils/isAdmin";
import MESSAGE from "constants/message";
import Header from "components/Header";
import Post from "components/post";
import ScrollIndicator from "components/post/ScrollIndicator";
import useQueryId from "Hooks/useQueryId";
import PageSkeleton from "components/PageSkeleton";

const PostPage = () => {
  const router = useRouter();
  const postId = useQueryId();
  const [adminValidationForNotPublicPost, setAdminValidationForNotPublicPost] =
    useState(false);
  const { data: userInfo } = useGetUserQuery();

  const { data } = useGetPostQuery(isNaN(postId) ? 0 : postId);

  const PostData = data?.mainPost;

  useEffect(() => {
    if (!PostData) return;
    if (PostData.isPublic) return;

    if (IsAdmin(userInfo)) {
      setAdminValidationForNotPublicPost(true);
    } else {
      alert(MESSAGE.NOT_READY_POST);
      router.replace("/");
    }
  }, [userInfo, PostData, router]);

  if (router.isFallback) return <PageSkeleton nextUrl="/post/" />;

  if (!PostData?.isPublic) {
    if (!adminValidationForNotPublicPost) {
      return <PageSkeleton nextUrl="/post/" />;
    }
  }

  if (!PostData) return null;

  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>{PostData.title}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content={PostData.content.substring(0, 100)} />
        <meta property="og:title" content={PostData.title} />
        <meta
          property="og:image"
          content={getOgImage(PostData.thumbNailUrl, String(PostData.category))}
        />
        <meta property="og:url" content={`https://byjuun.com/post/${postId}`} />
      </Head>
      <Header />
      <ScrollIndicator />
      <Post Post={PostData}>
        <>
          <Post.Header />
          <Post.Content />
          <Post.RoutePostButtons />
          <Post.Comments />
          <ScrollButton />
        </>
      </Post>
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
  try {
    const postId = Number(context.params?.id);
    await queryClient.fetchQuery([QUERY_KEY.POST.ONE, postId], () =>
      getPostAPI(postId)
    );
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (err) {
    return { props: {} };
  }
};

export default PostPage;

function getOgImage(url: string | null | undefined, category: string) {
  if (url === "" || url === "null" || url === "undefined" || !url)
    return S3_PREFIX + THUMBNAIL[category]?.jpg;
  else return url;
}
