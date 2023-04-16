import React from "react";

interface Props {
  Icon: JSX.Element;
  onClick: () => void;
}

const IconBtn = ({ Icon, onClick }: Props) => {
  return <button onClick={onClick}>{Icon}</button>;
};

export default React.memo(IconBtn);
