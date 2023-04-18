import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles.module.scss";
import ListPageContainer from "components/ListPageContainer";
import Visitor from "components/ListPageContainer/sideBar/Visitor";
import TopViewsPosts from "components/ListPageContainer/sideBar/TopViewsPosts";
import RecentComments from "components/ListPageContainer/sideBar/RecentComment";
import RecentTags from "components/ListPageContainer/sideBar/RecentTags";
import { useGetCategoryPosts, useGetSearchPosts, useGetTagPosts } from "Hooks/Post";
import withPostsQueryValidation from "components/_hoc/withPostsQueryValidation";

const Posts = () => {
  const { query } = useRouter();
  const { title, description, ogDescription, url } = createMetaData(query);

  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content={String(description)} />
        <meta property="og:title" content={String(description)} />
        <meta property="og:description" content={String(ogDescription)} />
        <meta
          property="og:image"
          content={"https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/Original.png"}
        />
        <meta property="og:url" content={String(url)} />
      </Head>
      <ListPageContainer>
        <ListPageContainer.SideBar
          renderItems={
            <>
              <Visitor />
              <TopViewsPosts />
            </>
          }
        />
        <section className={styles.HomeContentWrapper}>
          <ListPageContainer.CategoryList />
          <ListPageContainer.Posts query={getQuery(query)} params={getParams(query)} />
        </section>
        <ListPageContainer.SideBar
          renderItems={
            <>
              <RecentComments />
              <RecentTags />
            </>
          }
        />
      </ListPageContainer>
    </>
  );
};

export default withPostsQueryValidation(Posts);

interface PostsPageQueryType {
  search?: string;
  tag?: string;
  category?: string;
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
