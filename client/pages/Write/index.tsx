import WriteWrap from "components/write";
import withAdminValidation from "components/_hoc/withAdminValidation";
import { WriteContainer } from "context/writeContext";
import React from "react";

const Write = () => {
  return (
    <WriteContainer>
      <WriteWrap />
    </WriteContainer>
  );
};

export default withAdminValidation(Write);
