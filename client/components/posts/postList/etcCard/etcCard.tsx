import React from "react";
import { useGetVisitor } from "Hooks/Visitor";
import Visitor from "./visitor";
import EtcCardLayout from "./layout";

const EtcCard = () => {
  const { isLoading: isFetchingVisitorLoading } = useGetVisitor();

  if (isFetchingVisitorLoading) return <EtcCardLayout />;

  return (
    <EtcCardLayout>
      <Visitor />
    </EtcCardLayout>
  );
};

export default EtcCard;
