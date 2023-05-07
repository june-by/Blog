import React from "react";
import styles from "./styles.module.scss";
import CategoryList from "./categoryList";
import PostList from "./postList";
import { UseInfiniteQueryResult } from "react-query";
import { PostsType } from "Types/post";
interface Props {
  params?: any;
  query: (params: any) => UseInfiniteQueryResult<PostsType[], unknown>;
}
const PostsPageContainer = (props: Props) => {
  return (
    <section className={styles.ListContainerWrapper}>
      <section className={styles.mainContentsWrapper}>
        <CategoryList />
        <PostList {...props} />
      </section>
    </section>
  );
};

export default PostsPageContainer;
