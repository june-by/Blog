import React from "react";
import { useGetVisitor } from "Hooks/Visitor";
import { useGetRecentComment } from "Hooks/Comment";
import Comment from "./comment";
import Visitor from "./visitor";
import EtcCardLayout from "./layout";

const EtcCard = () => {
  const { isLoading: isFetchingVisitorLoading } = useGetVisitor();
  const { isLoading: isFetchingCommentLoading } = useGetRecentComment();

  if (isFetchingVisitorLoading || isFetchingCommentLoading) return <EtcCardLayout />;

  return (
    <EtcCardLayout>
      <>
        <Visitor />
        <Comment />
      </>
    </EtcCardLayout>
  );
};

export default EtcCard;
