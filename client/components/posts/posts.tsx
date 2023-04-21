import React from "react";
import styles from "./styles.module.scss";
import CategoryList from "./categoryList";
import PostList from "./postList";
import SideBar from "./sideBar";
import Visitor from "./sideBar/Visitor";
import TopViewsPosts from "./sideBar/TopViewsPosts";
import RecentComments from "./sideBar/RecentComment";
import RecentTags from "./sideBar/RecentTags";
import { UseInfiniteQueryResult } from "react-query";
import { PostsType } from "Types/post";
interface Props {
  params?: any;
  query: (params: any) => UseInfiniteQueryResult<PostsType[], unknown>;
}
const PostsPageContainer = (props: Props) => {
  return (
    <section className={styles.ListContainerWrapper}>
      <SideBar
        renderItems={
          <>
            <Visitor />
            <TopViewsPosts />
          </>
        }
      />
      <section className={styles.mainContentsWrapper}>
        <CategoryList />
        <PostList {...props} />
      </section>
      <SideBar
        renderItems={
          <>
            <RecentComments />
            <RecentTags />
          </>
        }
      />
    </section>
  );
};

export default PostsPageContainer;
