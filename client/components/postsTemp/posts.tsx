import React from "react";
import styles from "./styles.module.scss";
import CategoryList from "./CategoryList";
import PostList from "./postList";
import { UseInfiniteQueryResult } from "react-query";
import { PostsType } from "Types/post";
import Contact from "./Contact";
interface Props {
  params?: any;
  query: (params: any) => UseInfiniteQueryResult<PostsType[], unknown>;
}
const PostsPageContainer = (props: Props) => {
  return (
    <section className={styles.ListContainerWrapper}>
      <section className={styles.mainContentsWrapper}>
        <CategoryList />
        <div>Post 영역</div>
        <Contact />
        {/* <CategoryList />
        <PostList {...props} /> */}
      </section>
    </section>
  );
};

export default PostsPageContainer;
