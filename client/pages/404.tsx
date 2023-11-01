import Header from "@components/Header";
import CommonSEO from "@components/shared/CommonSEO";
import NotFoundPageIndicator from "@components/shared/NotFoundPageIndicator/NotFoundPageIndicator";
import React from "react";

const Custom404 = () => {
  return (
    <>
      <CommonSEO
        title="404 | Byjuun.com"
        description="존재하지 않는 페이지입니다."
      />
      <Header /> <NotFoundPageIndicator />
    </>
  );
};

export default Custom404;
