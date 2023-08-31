import PageTitle from "components/shared/PageTitle/PageTitle";
import React from "react";
import ArchiveContent from "./ArchiveContent";
import Visitor from "./Visitor";
import Tags from "./Tags";
import PostsArchive from "./PostsArchive";

const Archives = () => {
  return (
    <>
      <PageTitle
        title="📑 Archives"
        description="모든 기록들을 한곳에 모아놓은 페이지입니다."
      />
      <ArchiveContent title="🤗 Visitor">
        <Visitor />
      </ArchiveContent>
      <ArchiveContent title="🔗 Tags">
        <Tags />
      </ArchiveContent>
      <ArchiveContent title="📝 Posts">
        <PostsArchive />
      </ArchiveContent>
    </>
  );
};

export default Archives;
