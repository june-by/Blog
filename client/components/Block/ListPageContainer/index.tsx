import React from "react";
import styles from "./styles.module.scss";
import CategoryList from "./CategorySelect";
import Posts from "./Posts";
import SideBar from "./sideBar";
import AsyncBoundary from "components/_hoc/AsyncErrorBoundary";
import ErrorHelper from "../errorHelper";

interface Props {
  children: React.ReactNode;
}

const ListPageContainer = ({ children }: Props) => {
  return (
    <AsyncBoundary suspenseFallback={<></>} errorFallback={(props) => <ErrorHelper {...props} />}>
      <section className={styles.ListContainerWrapper}>{children}</section>
    </AsyncBoundary>
  );
};

ListPageContainer.SideBar = SideBar;
ListPageContainer.CategoryList = CategoryList;
ListPageContainer.Posts = Posts;

export default ListPageContainer;
