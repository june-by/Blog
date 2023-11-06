import NotFoundPageIndicator from "@components/shared/NotFoundPageIndicator";
import ScrollIndicator from "@components/shared/ScrollIndicator";
import ScrollToTopButton from "@components/shared/ScrollToTopButton";
import { getAllSnippetsIdAPI, getSnippet } from "@services/snippet";
import { Metadata } from "next";
import React, { Suspense } from "react";
import styles from "./styles.module.scss";
import {
  PostAdminButtons,
  PostComments,
  PostContent,
  PostDate,
  PostTableOfContents,
  PostTitle,
} from "@components/post";
import WithAdminValidation from "@components/shared/WithAdminValidation";

interface Props {
  params: {
    id: String;
  };
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const snippetData = await getSnippet({ id: Number(id) });

  if (!snippetData) return {};

  const { title, content } = snippetData;

  const description = content.substring(0, 100);

  return {
    metadataBase: new URL("http://localhost:3000"),
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://byjuun.com/snippets/${id}`,
      images: [
        "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/Original.png",
      ],
    },
  };
}

const SnippetPostPage = async ({ params }: Props) => {
  const id = Number(params.id);
  const snippetData = await getSnippet({ id });

  if (!snippetData) {
    return <NotFoundPageIndicator text="존재하지 않는 게시글입니다." />;
  }

  return (
    <>
      <ScrollIndicator />
      <WithAdminValidation>
        <PostAdminButtons id={id} />
      </WithAdminValidation>
      <PostTitle title={snippetData.title + ` (${snippetData.category})`} />
      <PostDate date={snippetData.createdAt} />
      <div className={styles.contentSection}>
        <div className={styles.content}>
          <PostContent
            category={snippetData.category}
            content={snippetData.content}
          />
        </div>
        <PostTableOfContents title={snippetData.title} />
      </div>
      <PostComments />
      <ScrollToTopButton />
    </>
  );
};

export async function generateStaticParams() {
  const data = await getAllSnippetsIdAPI();

  return data.map(({ id }) => {
    return { id: String(id) };
  });
}

export default SnippetPostPage;
