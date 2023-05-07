import { useGetVisitor } from "Hooks/Visitor";
import React from "react";

const Visitor = () => {
  const { data: visitorData } = useGetVisitor();

  if (!visitorData) return null;

  return (
    <>
      <h3>방문객</h3>
      <span>
        총 방문 : <strong>{visitorData?.totalVisitor}</strong>명
      </span>
      <span>
        오늘 방문 : <strong>{visitorData?.todayVisitor}</strong>명
      </span>
    </>
  );
};

export default Visitor;
