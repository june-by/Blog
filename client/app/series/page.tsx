import SeriesList from "@components/series/SeriesList";
import PageTitle from "@components/shared/PageTitle";
import ScrollToTopButton from "@components/shared/ScrollToTopButton";
import { createMetaData } from "@utils";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return createMetaData({
    title: "Series | Byjuun.com",
    description: "시리즈를 모아놓은 페이지입니다.",
    ogUrl: "https://byjuun.com/series",
  });
}

const SeriesPage = () => {
  return (
    <>
      <PageTitle
        title="✍️ Series"
        description="시리즈로 작성된 포스트들을 모아놓았습니다 😄"
      />
      <SeriesList />
      <ScrollToTopButton />
    </>
  );
};

export default SeriesPage;
