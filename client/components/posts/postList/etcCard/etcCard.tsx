import React from "react";
import styles from "./styles.module.scss";
import { useGetVisitor } from "Hooks/Visitor";
import { useGetRecentComment } from "Hooks/Comment";
import Comment from "./comment";
import Visitor from "./visitor";

const EtcCardWrapper = ({ children }: { children?: JSX.Element }) => {
  return <div className={styles.Card}>{children}</div>;
};

const EtcCard = () => {
  const { isLoading: isFetchingVisitorLoading } = useGetVisitor();
  const { isLoading: isFetchingCommentLoading } = useGetRecentComment();

  if (isFetchingVisitorLoading || isFetchingCommentLoading) return <EtcCardWrapper />;

  return (
    <EtcCardWrapper>
      <>
        <Visitor />
        <Comment />
      </>
    </EtcCardWrapper>
  );
};

export default EtcCard;
