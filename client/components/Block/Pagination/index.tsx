import React, { useCallback, useEffect, useState } from "react";
import PageBtn from "../../Atom/PageBtn";
import styles from "./styles.module.scss";

interface Props {
  totalPage: number | undefined;
  pageNum: number;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ totalPage, pageNum, setPageNum }: Props) => {
  const [pageArr, setPageArr] = useState<Array<number | string>>([]);

  const onClickPageBtn = useCallback(
    (idx) => () => {
      if (idx === "...") return;
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      if (idx === "이전") {
        if (pageNum - 1 > 0) return setPageNum((prev) => prev - 1);
      } else if (idx === "다음") {
        if (pageNum + 1 <= Number(totalPage)) return setPageNum((prev) => prev + 1);
      } else setPageNum(idx);
    },
    [pageNum, totalPage, setPageNum]
  );

  useEffect(() => {
    setPageArr(makeArray(pageNum, Number(totalPage)));
  }, [pageNum, totalPage]);

  return (
    <div className={styles.Pagination}>
      <>
        {totalPage !== undefined && (
          <>
            <div className={styles.ArrowBtn}>
              <PageBtn idx={"이전"} currentPage={pageNum} onClickPageBtn={onClickPageBtn} />
            </div>
            {pageArr?.map((value, idx: number) => {
              return <PageBtn key={idx + 100} idx={value} currentPage={pageNum} onClickPageBtn={onClickPageBtn} />;
            })}
            <div className={styles.ArrowBtn}>
              <PageBtn idx={"다음"} currentPage={pageNum} onClickPageBtn={onClickPageBtn} />
            </div>
          </>
        )}
      </>
    </div>
  );
};

const makeArray = (pageNum: number, totalPage: number) => {
  if (totalPage > 5) {
    if (pageNum == 1 || pageNum == 2) return [1, 2, 3, "...", totalPage];
    else if (pageNum === totalPage || pageNum === totalPage - 1) return [1, "...", totalPage - 2, totalPage - 1, totalPage];
    else return [1, "...", pageNum - 1, pageNum, pageNum + 1, "...", totalPage];
  } else {
    return Array.from({ length: totalPage }, (_, idx: number) => idx + 1);
  }
};

export default Pagination;
