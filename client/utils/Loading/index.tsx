import React from "react";
import styles from "./styles.module.scss";
import SyncLoader from "react-spinners/SyncLoader";

const Loading = (loading: boolean) => {
  return (
    <div className={styles.LoaderWrapper}>
      <SyncLoader loading={loading} size={15} color="#0099fa"></SyncLoader>
    </div>
  );
};

export default Loading;
