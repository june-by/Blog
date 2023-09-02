import { GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { dehydrate, QueryClient } from "react-query";
import { getAllPostsId, getPostAPI } from "services/post";
import { useGetPostQuery } from "Hooks/Post";
import ScrollToTopButton from "components/shared/ScrollToTopButton";
import S3_PREFIX from "constants/s3Prefix";
import THUMBNAIL from "constants/thumbnail";
import QUERY_KEY from "constants/queryKey";
import { useGetUserQuery } from "Hooks/User";
import IsAdmin from "utils/isAdmin";
import MESSAGE from "constants/message";
import Post from "components/post";
import ScrollIndicator from "components/shared/ScrollIndicator";
import useQueryId from "Hooks/useQueryId";
import PageSkeleton from "components/PageSkeleton";
import CommonSEO from "components/shared/CommonSEO";
import styles from "./styles.module.scss";

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

  if (router.isFallback) return <PageSkeleton url="/post/" />;

  if (!PostData?.isPublic) {
    if (!adminValidationForNotPublicPost) {
      return <PageSkeleton url="/post/" />;
    }
  }

  if (!PostData) return null;

  return (
    <>
      <CommonSEO
        title={PostData.title}
        description={PostData.content.substring(0, 100)}
        ogTitle={PostData.title}
        ogDescription={PostData.content.substring(0, 100)}
        ogImage={getOgImage(PostData.thumbNailUrl, String(PostData.category))}
        ogUrl={`https://byjuun.com/post/${postId}`}
      />
      <ScrollIndicator />
      <Post Post={PostData}>
        <Post.AdminButtons />
        <Post.Title />
        <div className={styles.div1}>
          <Post.Date />
          <Post.Category />
        </div>
        <Post.Tags />
        <Post.ViewCount />
        <div className={styles.contentSection}>
          <div>
            <Post.SeriesInfo />
            <Post.Content />
          </div>
          <Post.TableOfContents />
        </div>
        <Post.RoutePostButtons />
        <Post.Comments />
      </Post>
      <ScrollToTopButton />
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
