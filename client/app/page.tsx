import { PostsPageQueryType } from "@Types/page";
import CategoryList from "@components/posts/CategoryList";
import Contact from "@components/posts/Contact";
import PostList from "@components/posts/postList";
import PageLayout from "@components/shared/PageLayout";
import ScrollToTopButton from "@components/shared/ScrollToTopButton/ScrollToTopButton";
import { Metadata } from "next";
import React, { Suspense } from "react";

interface Props {
  searchParams: PostsPageQueryType;
}

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const { title, description, ogTitle, ogDescription, ogUrl } =
    createMetaData(searchParams);

  return {
    title,
    description,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: ogUrl,
      images: [
        "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/Original.png",
      ],
    },
  };
}

const MainPage = () => {
  return (
    <PageLayout type="Flex">
      {/* @ts-expect-error Server Component */}
      <CategoryList />
      <PostList />
      <Contact />
      <ScrollToTopButton />
    </PageLayout>
  );
};

export default MainPage;

function createMetaData({ search, tag, category }: PostsPageQueryType) {
  if (search)
    return {
      title: search,
      description: `"${search}" Search Result Page`,
      ogTitle: `"${search}" Search Result Page`,
      ogDescription: `This page is a collection of search result for "${search}"`,
      ogUrl: `https://byjuun.com/?search=${search}`,
    };
  else if (tag)
    return {
      title: tag,
      description: `"${tag}" Tagged Page`,
      ogTitle: `"${tag}" Tagged Page`,
      ogDescription: `This page is a collection of posts with the "${tag}" tag`,
      ogUrl: `https://byjuun.com/?tag=${tag}`,
    };
  else if (category)
    return {
      title: category,
      description: `"${category}" Category Page`,
      ogTitle: `"${category}" Category Page`,
      ogDescription: `This page is a collection of posts about "${category}" category`,
      ogUrl: `https://byjuun.com/?category=${category}`,
    };
  else
    return {
      title: `byjuun.com`,
      description: `Hi~ I'm FrontEnd Developer Byjuun 🧑‍💻`,
      ogTitle: `byjuun.com`,
      ogDescription: `Hi~ I'm FrontEnd Developer Byjuun 🧑‍💻`,
      ogUrl: `https://byjuun.com`,
    };
}
