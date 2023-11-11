import PageTitle from "@components/shared/PageTitle";
import { Metadata } from "next";
import React from "react";
import { getVisitor } from "@services/visitor";
import Visitor from "@components/archives/Visitor";
import { getAllTags } from "@services/tag";
import Tags from "@components/archives/Tags";
import { getAllPosts } from "@services/post";
import PostsArchive from "@components/archives/PostsArchive";
import ArchiveContent from "@components/archives/ArchiveContent";

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
  return (
    <>
      <PageTitle
        title="📑 Archives"
        description="모든 기록들을 한곳에 모아놓은 페이지입니다."
      />
      <ArchiveContent title="🤗 Visitor" fetcher={getVisitor}>
        {(visitor) => <Visitor {...visitor} />}
      </ArchiveContent>
      <ArchiveContent
        fetcher={getAllTags}
        title={(tags) => `🔗 Tags(${tags.length})`}
      >
        {(tags) => <Tags tags={tags} />}
      </ArchiveContent>
      <ArchiveContent
        title={(posts) => `📝 Posts(${posts?.length})`}
        fetcher={getAllPosts}
      >
        {(posts) => <PostsArchive posts={posts?.data} />}
      </ArchiveContent>
    </>
  );
};

export default ArchivePage;
