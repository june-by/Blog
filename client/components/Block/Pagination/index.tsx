import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import PageBtn from "../../Atom/PageBtn";
import styles from "./styles.module.scss";

interface Props {
  totalPage: number | undefined;
}

const Pagination = ({ totalPage }: Props) => {
  const { query, push } = useRouter();
  const page = query.page ? Number(query.page) : 1;
  const [pageArr, setPageArr] = useState<Array<number | string>>([]);

  const onClickPageBtn = useCallback(
    (idx) => () => {
      if (idx === "...") return;
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      if (idx === "이전") {
        if (page - 1 > 0) return push(`/?page=${page - 1}`);
      } else if (idx === "다음") {
        if (page + 1 <= Number(totalPage)) return push(`/?page=${page + 1}`);
      } else push(`/?page=${idx}`);
    },
    [page, totalPage, push]
  );

  useEffect(() => {
    setPageArr(makeArray(page, Number(totalPage)));
  }, [page, totalPage]);

  return (
    <div className={styles.Pagination}>
      <>
        {totalPage !== undefined && (
          <>
            <div className={styles.ArrowBtn}>
              <PageBtn idx={"이전"} currentPage={page} onClickPageBtn={onClickPageBtn} />
            </div>
            {pageArr?.map((value, idx: number) => {
              return <PageBtn key={idx + 100} idx={value} currentPage={page} onClickPageBtn={onClickPageBtn} />;
            })}
            <div className={styles.ArrowBtn}>
              <PageBtn idx={"다음"} currentPage={page} onClickPageBtn={onClickPageBtn} />
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
