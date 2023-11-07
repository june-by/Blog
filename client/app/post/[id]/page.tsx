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
import { getAllPostsId, getPost } from "@services/post";
import { Metadata } from "next";
import React from "react";
import styles from "./styles.module.scss";
import NotFoundPageIndicator from "@components/shared/NotFoundPageIndicator";
import WithAdminValidation from "@components/shared/WithAdminValidation";
import WithPostPublicValidation from "@components/post/WithPostPublicValidation";

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
    mainPost: { title, content, thumbNailUrl, category, shortDescription },
  } = postData;

  const description = shortDescription ?? content.substring(0, 100);

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

  const {
    mainPost: {
      title,
      category,
      content,
      Tags,
      createdAt,
      seriesPosts,
      seriesTitle,
      SeriesId,
      isPublic,
    },
    prevPost,
    nextPost,
  } = postData;

  return (
    <WithPostPublicValidation isPublic={isPublic}>
      <ScrollIndicator />
      <WithAdminValidation>
        <PostAdminButtons id={id} />
      </WithAdminValidation>
      <PostTitle title={title} />
      <PostTags Tags={Tags} />
      <PostViewCount id={id} />
      <div className={styles.div1}>
        <PostDate date={createdAt} />
        <PostCategory category={category} />
      </div>
      <div className={styles.contentSection}>
        <div className={styles.content}>
          <PostSeriesInfo
            seriesPosts={seriesPosts}
            seriesTitle={seriesTitle}
            SeriesId={SeriesId}
            id={id}
          />
          <PostContent category={category} content={content} />
        </div>
        <PostTableOfContents title={title} />
      </div>
      <RoutePostButtons prevPost={prevPost} nextPost={nextPost} />
      <PostComments />
      <ScrollToTopButton />
    </WithPostPublicValidation>
  );
};

export default PostPage;

function getOgImage(url: string | null | undefined, category: string) {
  if (url === "" || url === "null" || url === "undefined" || !url)
    return S3_PREFIX + THUMBNAIL[category]?.jpg;
  else return url;
}

export async function generateStaticParams() {
  const data = await getAllPostsId();

  return data.map(({ id }) => {
    return { id: String(id) };
  });
}
