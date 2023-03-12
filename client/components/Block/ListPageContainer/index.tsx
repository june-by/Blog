import React from "react";
import styles from "./styles.module.scss";
import CategoryList from "./CategorySelect";
import Posts from "./Posts";
import SideBar from "./sideBar";
interface Props {
  children: React.ReactNode;
}

const ListPageContainer = ({ children }: Props) => {
  return <section className={styles.ListContainerWrapper}>{children}</section>;
};

ListPageContainer.SideBar = SideBar;
ListPageContainer.CategoryList = CategoryList;
ListPageContainer.Posts = Posts;

export default ListPageContainer;
