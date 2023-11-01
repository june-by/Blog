import React from "react";
import styles from "./styles.module.scss";
interface Props {
  handleSubmit: () => void;
}
const SubmitButton = ({ handleSubmit }: Props) => {
  return (
    <button onClick={handleSubmit} className={styles.Button}>
      SUBMIT
    </button>
  );
};

export default SubmitButton;
