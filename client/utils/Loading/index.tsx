import React from "react";
import styles from "./styles.module.scss";
import HashLoader from "react-spinners/HashLoader";

const Loading = (loading: boolean, size: number) => {
  return (
    <div className={styles.LoaderWrapper}>
      <div className={styles.LoaderCss}>
        <HashLoader loading={loading} size={size} color="#0099fa"></HashLoader>
      </div>
    </div>
  );
};

export default Loading;
