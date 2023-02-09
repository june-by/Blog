import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import NoPost from "components/Block/ListPageContainer/Posts/NoPost";
import Posts from "components/Block/Posts";
import useGetPosts from "Hooks/useGetPosts";
import styles from "../styles.module.scss";

import { PostsType } from "Types/post";
import ListPageContainer from "components/Block/ListPageContainer";
import Visitor from "components/Block/ListPageContainer/sideBar/Visitor";
import TopViewsPosts from "components/Block/ListPageContainer/sideBar/TopViewsPosts";
import RecentComments from "components/Block/ListPageContainer/sideBar/RecentComment";
import RecentTags from "components/Block/ListPageContainer/sideBar/RecentTags";

const Filter = () => {
  const { query } = useRouter();
  const [Post, isLoading] = useGetPosts(query);
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
          {Post?.length !== 0 ? <Posts posts={Post as PostsType[]} isLoading={isLoading} /> : <NoPost />}
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

function makeMetaData(query: { search?: string; tag?: string }) {
  if (query.search)
    return [
      query.search,
      `${query.search}검색 결과 페이지`,
      `${query.search}검색 결과 목록입니다`,
      `https://byjuun.com/filter?search=${query.search}`,
    ];
  else
    return [
      query.tag,
      `${query.tag} 태깅 페이지`,
      `${query.tag}로 태깅된 목록입니다`,
      `https://byjuun.com/filter?tag=${query.tag}`,
    ];
}
