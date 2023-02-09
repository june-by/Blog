import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles.module.scss";
import ListPageContainer from "components/Block/ListPageContainer";
import Visitor from "components/Block/ListPageContainer/sideBar/Visitor";
import TopViewsPosts from "components/Block/ListPageContainer/sideBar/TopViewsPosts";
import RecentComments from "components/Block/ListPageContainer/sideBar/RecentComment";
import RecentTags from "components/Block/ListPageContainer/sideBar/RecentTags";
import { useGetCategoryPosts, useGetSearchPosts, useGetTagPosts } from "Hooks/Post";

const Filter = () => {
  const { query } = useRouter();
  const [title, description, ogDescription, url] = makeMetaData(query);

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

export default Filter;

function makeMetaData(query: { search?: string; tag?: string; category?: string }) {
  if (query.search)
    return [
      query.search,
      `${query.search}검색 결과 페이지`,
      `${query.search}검색 결과 목록입니다`,
      `https://byjuun.com/filter?search=${query.search}`,
    ];
  else if (query.tag)
    return [
      query.tag,
      `${query.tag} 태깅 페이지`,
      `${query.tag}로 태깅된 목록입니다`,
      `https://byjuun.com/filter?tag=${query.tag}`,
    ];
  else
    return [
      query.category,
      `${query.category} 페이지`,
      `${query.category} 페이지 목록입니다`,
      `https://byjuun.com/filter?category=${query.category}`,
    ];
}

function getQuery(query: { search?: string; tag?: string; category?: string }) {
  if (query.search) return useGetSearchPosts;
  else if (query.tag) return useGetTagPosts;
  else return useGetCategoryPosts;
}

function getParams(query: { search?: string; tag?: string; category?: string }) {
  if (query.search) return query.search;
  else if (query.tag) return query.tag;
  else return query.category;
}
