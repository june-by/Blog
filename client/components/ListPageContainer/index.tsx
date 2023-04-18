import React from "react";
import styles from "./styles.module.scss";
import CategoryList from "./CategorySelect";
import Posts from "./Posts";
import SideBar from "./sideBar";
import Visitor from "./sideBar/Visitor";
import TopViewsPosts from "./sideBar/TopViewsPosts";
import RecentComments from "./sideBar/RecentComment";
import RecentTags from "./sideBar/RecentTags";
interface Props {
  children: React.ReactNode;
}

const ListPageContainer = ({ children }: Props) => {
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
      {children}
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

ListPageContainer.SideBar = SideBar;
ListPageContainer.CategoryList = CategoryList;
ListPageContainer.Posts = Posts;

export default ListPageContainer;
