import React from "react";
import styles from "../postCard.module.scss";
import { useGetVisitor } from "Hooks/Visitor";

const VisitorCardWrapper = ({ children }: { children?: JSX.Element }) => {
  return <div className={styles.PostCard}>{children}</div>;
};

const EtcCard = () => {
  const { data, isLoading, isError } = useGetVisitor();

  if (isLoading) return <VisitorCardWrapper />;

  return (
    <VisitorCardWrapper>
      <>
        <h3>방문객</h3>
        <span>
          총 방문 : <strong>{data?.totalVisitor}</strong>명
        </span>
        <span>
          오늘 방문 : <strong>{data?.todayVisitor}</strong>명
        </span>
      </>
    </VisitorCardWrapper>
  );
};

export default EtcCard;
