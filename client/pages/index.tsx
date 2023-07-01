import type { NextPage } from "next";
import Head from "next/head";
import { useGetCategoryPosts, useGetMainPost, useGetSearchPosts, useGetTagPosts } from "Hooks/Post";
import ScrollButton from "components/shared/scrollButton";
import PostsPageContainer from "components/posts";
import { useRouter } from "next/router";
import { PostsPageQueryType } from "Types/page";

const Home: NextPage = () => {
  const { query } = useRouter();
  const { title, description, ogDescription, url, ogTitle } = createMetaData(query);

  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta
          property="og:image"
          content={"https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/Original.png"}
        />
        <meta property="og:url" content={url} />
      </Head>
      <PostsPageContainer query={getQuery(query)} params={getParams(query)} />
      <ScrollButton />
    </>
  );
};

export default Home;

function getQuery(query: PostsPageQueryType) {
  if (query.search) return useGetSearchPosts;
  else if (query.tag) return useGetTagPosts;
  else if (query.category) return useGetCategoryPosts;
  else return useGetMainPost;
}

function getParams(query: PostsPageQueryType) {
  if (query.search) return query.search;
  else if (query.tag) return query.tag;
  else if (query.category) return query.category;
  else return null;
}

function createMetaData(query: PostsPageQueryType) {
  if (query.search)
    return {
      title: query.search,
      description: `"${query.search}" Search Result Page`,
      ogTitle: `"${query.search}" Search Result Page`,
      ogDescription: `This page is a collection of search result for "${query.search}"`,
      url: `https://byjuun.com/?search=${query.search}`,
    };
  else if (query.tag)
    return {
      title: query.tag,
      description: `"${query.tag}" Tagged Page`,
      ogTitle: `"${query.tag}" Tagged Page`,
      ogDescription: `This page is a collection of posts with the "${query.tag}" tag`,
      url: `https://byjuun.com/?tag=${query.tag}`,
    };
  else if (query.category)
    return {
      title: query.category,
      description: `"${query.category}" Category Page`,
      ogTitle: `"${query.category}" Category Page`,
      ogDescription: `This page is a collection of posts about "${query.category}" category`,
      url: `https://byjuun.com/?category=${query.category}`,
    };
  else
    return {
      title: `byjuun.com`,
      description: `Hi~ I'm FrontEnd Developer Byjuun 🧑‍💻`,
      ogTitle: `byjuun.com`,
      ogDescription: `Hi~ I'm FrontEnd Developer Byjuun 🧑‍💻`,
      url: `https://byjuun.com`,
    };
}
