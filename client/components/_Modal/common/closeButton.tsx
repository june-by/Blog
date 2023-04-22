import CloseIcon from "components/Icon/close";
import React, { HTMLAttributes } from "react";

const CloseButton = (props: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props}>
      <CloseIcon />
    </button>
  );
};

export default CloseButton;
