import type { NextPage } from "next";
import { useState } from "react";
import CategorySelect from "../components/Block/MainPage/CategorySelect";
import MainPosts from "../components/Block/MainPage/MainPosts";
import Pagination from "../components/Block/Pagination";
import { useGetPostNum } from "../Hooks/Post";
import styles from "./styles.module.scss";

const Home: NextPage = () => {

	const [pageNum, setPageNum] = useState<number>(0);

	//const {data : totalPageNum} = useGetPostNum("Main");

	return (
		<div className={styles.HomeWrapper}>
			<CategorySelect />
			<MainPosts pageNum={pageNum} />
			<Pagination totalPage={10} pageNum={pageNum} setPageNum={setPageNum} />
		</div>
	);
};

export default Home;
