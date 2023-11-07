import PageTitle from "@components/shared/PageTitle";
import { Metadata } from "next";
import React from "react";
import { getVisitor } from "@services/visitor";
import ArchiveContent from "@components/archives/ArchiveContent";
import Visitor from "@components/archives/Visitor";
import { getAllTags } from "@services/tag";
import Tags from "@components/archives/Tags";
import { getAllPosts } from "@services/post";
import PostsArchive from "@components/archives/PostsArchive";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Archives | Byjuun.com",
    description: "모든 기록물을 모아놓은 페이지입니다.",
    openGraph: {
      title: "Archives | Byjuun.com",
      description: "모든 기록물을 모아놓은 페이지입니다.",
      url: "https://byjuun.com/archives",
      images: [
        "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/Original.png",
      ],
    },
  };
}

const ArchivePage = async () => {
  const [visitor, tags, posts] = await Promise.all([
    getVisitor(),
    getAllTags(),
    getAllPosts(),
  ]);

  return (
    <>
      <PageTitle
        title="📑 Archives"
        description="모든 기록들을 한곳에 모아놓은 페이지입니다."
      />
      <ArchiveContent title="🤗 Visitor">
        <Visitor {...visitor} />
      </ArchiveContent>
      <ArchiveContent title={`🔗 Tags(${tags.length})`}>
        <Tags tags={tags} />
      </ArchiveContent>
      <ArchiveContent title={`📝 Posts(${posts?.length})`}>
        <PostsArchive posts={posts?.data} />
      </ArchiveContent>
    </>
  );
};

export default ArchivePage;
