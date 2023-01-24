import React from "react";
import styles from "./styles.module.scss";

interface Props {
  isError: boolean;
  refetch: Function;
  children: JSX.Element;
}

export default function QueryErrorBoundary({ isError, refetch, children }: Props) {
  return (
    <>
      {isError ? (
        <div className={styles.QueryErrorBoundaryRoot}>
          <h2>잠시 후 다시 시도해주세요</h2>
          <span>
            요청사항을 처리하는데
            <br />
            실패했습니다.
          </span>
          <button onClick={() => refetch()}>다시 시도</button>
        </div>
      ) : (
        children
      )}
    </>
  );
}
