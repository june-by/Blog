import type { NextPage } from "next";
import { useState } from "react";
import CategorySelect from "../components/Block/CategorySelect";
import Pagination from "../components/Block/Pagination";
import Posts from "../components/Block/Posts";
import { useGetPostNum, useGetMainPost } from "../Hooks/Post";
import styles from "./styles.module.scss";

const Home: NextPage = () => {
  const [pageNum, setPageNum] = useState<number>(1);

  const { data: totalPageNum } = useGetPostNum("main");
  const { data: MainPosts, isLoading } = useGetMainPost(pageNum);

  return (
    <div className={styles.HomeWrapper}>
      <CategorySelect />
      <Posts posts={MainPosts} isLoading={isLoading} />
      <Pagination totalPage={totalPageNum} pageNum={pageNum} setPageNum={setPageNum} />
    </div>
  );
};

export default Home;
