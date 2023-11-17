import { Metadata } from "next";
import React from "react";
import { getVisitor } from "@services/visitor";
import Visitor from "@components/archives/Visitor";
import { getAllTags } from "@services/tag";
import Tags from "@components/archives/Tags";
import { getAllPosts } from "@services/post";
import PostsArchive from "@components/archives/PostsArchive";
import ArchiveContent from "@components/archives/ArchiveContent";
import { createMetaData } from "@utils";

export async function generateMetadata(): Promise<Metadata> {
  return createMetaData({
    title: "Archives | Byjuun.com",
    description: "모든 기록물을 모아놓은 페이지입니다.",
    ogUrl: "https://byjuun.com/archives",
  });
}

const ArchivePage = async () => {
  return (
    <>
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
