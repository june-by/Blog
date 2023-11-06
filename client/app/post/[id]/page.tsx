import {
  PostAdminButtons,
  PostCategory,
  PostComments,
  PostContent,
  PostDate,
  PostSeriesInfo,
  PostTableOfContents,
  PostTags,
  PostTitle,
  PostViewCount,
  RoutePostButtons,
} from "@components/post";
import ScrollIndicator from "@components/shared/ScrollIndicator/ScrollIndicator";
import ScrollToTopButton from "@components/shared/ScrollToTopButton";
import { S3_PREFIX, THUMBNAIL } from "@constants";
import { getAllPostsId } from "@services/post";
import { Metadata } from "next";
import React, { Suspense } from "react";
import styles from "./styles.module.scss";
import { PostPageDataType, PostType } from "@Types/post";
import NotFoundPageIndicator from "@components/shared/NotFoundPageIndicator";
import request from "@services/request";

interface Props {
  params: {
    id: String;
  };
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const postData = await getPost({ id: Number(id) });

  if (!postData) return {};

  const {
    mainPost: { title, content, thumbNailUrl, category },
  } = postData;

  const description = content.substring(0, 100);

  return {
    metadataBase: new URL("http://localhost:3000"),
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://byjuun.com/post/${id}`,
      images: [getOgImage(thumbNailUrl, String(category))],
    },
  };
}

const PostPage = async ({ params }: Props) => {
  const id = Number(params.id);
  const postData = await getPost({ id });

  if (!postData) {
    return <NotFoundPageIndicator text="존재하지 않는 게시글입니다." />;
  }

  const { mainPost: post, prevPost, nextPost } = postData;

  return (
    <>
      <ScrollIndicator />
      <Suspense>
        <PostAdminButtons />
      </Suspense>
      <PostTitle title={post.title} />
      <PostTags Tags={post.Tags} />
      <PostViewCount id={id} />
      <div className={styles.div1}>
        <PostDate date={post.createdAt} />
        <PostCategory category={post.category} />
      </div>
      <div className={styles.contentSection}>
        <div className={styles.content}>
          <PostSeriesInfo {...post} />
          <PostContent category={post.category} content={post.content} />
        </div>
        <PostTableOfContents title={post.title} />
      </div>
      <RoutePostButtons prevPost={prevPost} nextPost={nextPost} />
      <PostComments />
      <ScrollToTopButton />
    </>
  );
};

export default PostPage;

function getOgImage(url: string | null | undefined, category: string) {
  if (url === "" || url === "null" || url === "undefined" || !url)
    return S3_PREFIX + THUMBNAIL[category]?.jpg;
  else return url;
}

async function getPost({ id }: Pick<PostType, "id">) {
  if (isNaN(id)) return null;

  try {
    const data = await request<PostPageDataType | null>({
      url: `/post/load/${id}`,
      method: "get",
      options: {
        next: {
          tags: [`post${id}`],
        },
      },
    });

    return data;
  } catch (err) {
    return null;
  }
}

export async function generateStaticParams() {
  const data = await getAllPostsId();

  return data.map(({ id }) => {
    return { id: String(id) };
  });
}
