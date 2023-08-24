import PageTitle from "components/shared/PageTitle/PageTitle";
import React from "react";
import ArchiveContent from "./ArchiveContent";
import Visitor from "./Visitor";
import Tags from "./Tags";

const Archives = () => {
  return (
    <>
      <PageTitle
        title="📑 Archives"
        description="모든 기록들을 한곳에 모아놓은 페이지입니다."
      />
      <ArchiveContent title="🙏 Visitor" contentComponent={<Visitor />} />
      <ArchiveContent contentComponent={<Tags />} />
    </>
  );
};

export default Archives;
