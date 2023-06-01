import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import PostsPageContainer from "components/posts";
import { useGetCategoryPosts, useGetSearchPosts, useGetTagPosts } from "Hooks/Post";
import ScrollButton from "components/shared/scrollButton";
import { PostsPageQueryType } from "Types/page";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";

const Posts = () => {
  const { query } = useRouter();
  const { title, description, ogDescription, url } = createMetaData(query);

  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta property="og:title" content={description} />
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

export default Posts;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const isNumberOfKeyValid = verifyNumberOfKeys(Object.keys(query));
  const isValueValid = verifyValue(query);

  if (!isNumberOfKeyValid || !isValueValid) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: {},
    };
  }

  return {
    props: {},
  };
};

function verifyNumberOfKeys(keys: string[]) {
  const verifiedKeys = ["category", "search", "tag"];
  const includedKeys = keys.filter((key) => verifiedKeys.includes(key));
  return includedKeys.length === 1;
}

function verifyValue(query: ParsedUrlQuery) {
  for (const value of Object.values(query)) {
    if (!value) {
      return false;
    }
  }
  return true;
}

function createMetaData(query: PostsPageQueryType) {
  if (query.search)
    return {
      title: query.search,
      description: `${query.search}검색 결과 페이지`,
      ogDescription: `${query.search}검색 결과 목록입니다`,
      url: `https://byjuun.com/posts?search=${query.search}`,
    };
  else if (query.tag)
    return {
      title: query.tag,
      description: `${query.tag} 태깅 페이지`,
      ogDescription: `${query.tag}로 태깅된 목록입니다`,
      url: `https://byjuun.com/posts?tag=${query.tag}`,
    };
  else
    return {
      title: query.category,
      description: `${query.category} 페이지`,
      ogDescription: `${query.category} 페이지 목록입니다`,
      url: `https://byjuun.com/posts?category=${query.category}`,
    };
}

function getQuery(query: PostsPageQueryType) {
  if (query.search) return useGetSearchPosts;
  else if (query.tag) return useGetTagPosts;
  else return useGetCategoryPosts;
}

function getParams(query: PostsPageQueryType) {
  if (query.search) return query.search;
  else if (query.tag) return query.tag;
  else return query.category;
}
