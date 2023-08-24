import type { GetServerSideProps, NextPage } from "next";
import {
  useGetCategoryPosts,
  useGetMainPost,
  useGetSearchPosts,
  useGetSeriesPosts,
  useGetTagPosts,
} from "Hooks/Post";
import ScrollButton from "components/shared/scrollButton";
import { useRouter } from "next/router";
import { PostsPageQueryType } from "Types/page";
import { ParsedUrlQuery } from "querystring";
import CategoryList from "components/posts/CategoryList";
import PostList from "components/posts/postList";
import Contact from "components/posts/Contact";
import CommonSEO from "components/shared/CommonSEO";

const Home: NextPage = () => {
  const { query } = useRouter();
  const metaData = createMetaData(query);

  return (
    <>
      <CommonSEO {...metaData} />
      <CategoryList />
      <PostList query={getQuery(query)} params={getParams(query)} />
      <Contact />
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
      ogUrl: `https://byjuun.com/?search=${query.search}`,
    };
  else if (query.tag)
    return {
      title: query.tag,
      description: `"${query.tag}" Tagged Page`,
      ogTitle: `"${query.tag}" Tagged Page`,
      ogDescription: `This page is a collection of posts with the "${query.tag}" tag`,
      ogUrl: `https://byjuun.com/?tag=${query.tag}`,
    };
  else if (query.category)
    return {
      title: query.category,
      description: `"${query.category}" Category Page`,
      ogTitle: `"${query.category}" Category Page`,
      ogDescription: `This page is a collection of posts about "${query.category}" category`,
      ogUrl: `https://byjuun.com/?category=${query.category}`,
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
