import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import {
  useGetCategoryPosts,
  useGetMainPost,
  useGetSearchPosts,
  useGetSeriesPosts,
  useGetTagPosts,
} from "Hooks/Post";
import ScrollButton from "components/shared/scrollButton";
import PostsPageContainer from "components/posts";
import { useRouter } from "next/router";
import { PostsPageQueryType } from "Types/page";
import { ParsedUrlQuery } from "querystring";
import Header from "components/Header";

const Home: NextPage = () => {
  const { query } = useRouter();
  const { title, description, ogDescription, url, ogTitle } =
    createMetaData(query);

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
          content={
            "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/Original.png"
          }
        />
        <meta property="og:url" content={url} />
      </Head>
      <Header />
      <PostsPageContainer query={getQuery(query)} params={getParams(query)} />
      <ScrollButton />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const queryKeys = Object.keys(query);
  const isPageForEntirePost = queryKeys.length === 0;

  if (isPageForEntirePost) {
    return {
      props: {},
    };
  }

  if (!isVerifyNeeded(queryKeys)) {
    return {
      props: {},
    };
  }

  const isNumberOfKeyValid = verifyNumberOfKeys(queryKeys);
  const isValueValid = verifyValue(query);

  if (!isNumberOfKeyValid || !isValueValid) {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
};

function getVerifyNeededKeysLength(keys: string[]) {
  const verifiedKeys = ["category", "search", "tag", "series"];
  const includedKeys = keys.filter((key) => verifiedKeys.includes(key));
  return includedKeys.length;
}

const isVerifyNeeded = (keys: string[]) =>
  getVerifyNeededKeysLength(keys) === 0 ? false : true;

const verifyNumberOfKeys = (keys: string[]) =>
  getVerifyNeededKeysLength(keys) === 1;

function verifyValue(query: ParsedUrlQuery) {
  for (const value of Object.values(query)) {
    if (!value) {
      return false;
    }
  }
  return true;
}

function getQuery(query: PostsPageQueryType) {
  if (query.search) return useGetSearchPosts;
  else if (query.tag) return useGetTagPosts;
  else if (query.category) return useGetCategoryPosts;
  else if (query.series) return useGetSeriesPosts;
  else return useGetMainPost;
}

function getParams(query: PostsPageQueryType) {
  if (query.search) return query.search;
  else if (query.tag) return query.tag;
  else if (query.category) return query.category;
  else if (query.series) return query.series;
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
