import React from "react";
import { useGetVisitor } from "Hooks/Visitor";
import Visitor from "./visitor";
import EtcCardLayout from "./layout";
import LoadingOrNot from "components/_hoc/LoadingOrNot";

const EtcCard = () => {
  const { isLoading } = useGetVisitor();

  return (
    <EtcCardLayout>
      <LoadingOrNot isLoading={isLoading}>
        <Visitor />
      </LoadingOrNot>
    </EtcCardLayout>
  );
};

export default EtcCard;
