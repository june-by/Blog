import React, { HTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  Icon: JSX.Element;
}

const IconButton = ({ Icon, ...props }: Props) => {
  return (
    <button className={styles.btn} {...props}>
      {Icon}
    </button>
  );
};

export default React.memo(IconButton);
