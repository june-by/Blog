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

const Filter = () => {
	const { query } = useRouter();
	const [pageNum, setPageNum] = useState<number>(1);
	const { data: totalPageNum } = useGetPostNum(query.category as string);

	const [Post, isLoading] = useGetPosts({ pageNum: pageNum });
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
				<meta property="og:image" content={"/original.png"} />
				<meta property="og:url" content={String(url)} />
			</Head>
			<div className={styles.CategoryWrapper}>
				<CategorySelect />
				<Posts posts={Post} isLoading={isLoading} />
				<NoPost isPostExist={Post?.length !== 0 ? true : false} />
				{query.category && <Pagination totalPage={totalPageNum} pageNum={pageNum} setPageNum={setPageNum} />}
			</div>
		</>
	);
};

export default Filter;
