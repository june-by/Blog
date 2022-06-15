import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import NoPost from "../../components/Block/NoPost";
import CategorySelect from "../../components/Block/CategorySelect";
import Pagination from "../../components/Block/Pagination";
import Posts from "../../components/Block/Posts";
import { useGetPostNum } from "../../Hooks/Post";
import useGetPosts from "../../Hooks/useGetPosts";
import useMakeMetaInfo from "../../Hooks/useMakeMetaInfo";
import styles from "./styles.module.scss";
import { PostsType } from "../../Types/Post";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import prefetchData from "../../utils/prefetchData";

const Filter = () => {
	const { query } = useRouter();
	const { data: totalPageNum } = useGetPostNum(query.category);
	const Post = useGetPosts();
	const [title, description, ogDescription, url] = useMakeMetaInfo();

	return (
		<>
			<Head>
				<meta charSet="utf-8"></meta>
				<title>{title}</title>
				<link rel="shortcut icon" href="/favicon.ico" />
				<meta name="description" content={String(description)} />
				<meta property="og:title" content={String(description)} />
				<meta property="og:description" content={String(ogDescription)} />
				<meta property="og:image" content={"https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/Original.png"} />
				<meta property="og:url" content={String(url)} />
			</Head>
			<div className={styles.CategoryWrapper}>
				<CategorySelect />
				<Posts posts={Post as PostsType[]} />
				<NoPost isPostExist={Post?.length !== 0 ? true : false} />
				{query.category && <Pagination totalPage={totalPageNum} />}
			</div>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const queryClient = new QueryClient();
	prefetchData(queryClient, query);
	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		}
	}
}

export default Filter;
