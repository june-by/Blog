import { GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { dehydrate, QueryClient, useQueryClient } from "@tanstack/react-query";
import { getAllPostsId, getPostAPI } from "@services/post";
import { useGetPostQuery } from "@hooks/query";
import ScrollToTopButton from "@components/shared/ScrollToTopButton";
import { MESSAGE, QUERY_KEY, S3_PREFIX, THUMBNAIL } from "@constants";
import {
  PostAdminButtons,
  PostCategory,
  PostContent,
  PostDate,
  PostSeriesInfo,
  PostTableOfContents,
  PostTitle,
  PostTags,
  PostViewCount,
  RoutePostButtons,
  PostComments,
} from "@components/post";
import ScrollIndicator from "@components/shared/ScrollIndicator";
import { useQueryId } from "@hooks";
import PageSkeleton from "@components/PageSkeleton";
import CommonSEO from "@components/shared/CommonSEO";
import styles from "./styles.module.scss";
import WithPostPublicValidation from "@components/post/WithPostPublicValidation";

const PostPage = ({ id }: any) => {
  const router = useRouter();

  const { data } = useGetPostQuery({ id });

  const PostData = data?.mainPost;

  const handleNotPublicPost = useCallback(() => {
    alert(MESSAGE.NOT_READY_POST);
    router.replace("/");
  }, [router]);

  if (!PostData) {
    return null;
  }

  return (
    <WithPostPublicValidation
      isPublic={PostData.isPublic}
      fallback={<PageSkeleton url="/post/" />}
      onInvalid={handleNotPublicPost}
    >
      <>
        <CommonSEO
          title={PostData.title}
          description={PostData.content.substring(0, 100)}
          ogTitle={PostData.title}
          ogDescription={PostData.content.substring(0, 100)}
          ogImage={getOgImage(PostData.thumbNailUrl, String(PostData.category))}
          ogUrl={`https://byjuun.com/post/${id}`}
        />
        <ScrollIndicator />
        <PostAdminButtons />
        <PostTitle title={PostData.title} />
        <PostTags Tags={PostData.Tags} />
        <PostViewCount />
        <div className={styles.div1}>
          <PostDate date={PostData.createdAt} />
          <PostCategory category={PostData.category} />
        </div>
        <div className={styles.contentSection}>
          <div className={styles.content}>
            <PostSeriesInfo {...PostData} />
            <PostContent
              category={PostData.category}
              content={PostData.content}
            />
          </div>
          <PostTableOfContents title={PostData.title} />
        </div>
        <RoutePostButtons prevPost={data.prevPost} nextPost={data.nextPost} />
        <PostComments />
        <ScrollToTopButton />
      </>
    </WithPostPublicValidation>
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
        id: postId,
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
