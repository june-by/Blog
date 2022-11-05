import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import PageBtn from "../../Atom/PageBtn";
import styles from "./styles.module.scss";
import { makeArray, makeNextPath } from "./utils";

interface Props {
  totalPage: number | undefined;
}

const Pagination = ({ totalPage }: Props) => {
  const router = useRouter();
  const page = router.query.page ? Number(router.query.page) : 1;
  const [pageArr, setPageArr] = useState<Array<number | string>>([]);

  const onClickPageBtn = useCallback(
    (idx) => () => {
      if (idx === "...") return;
      if (idx === "이전") {
        if (page - 1 > 0) return router.push(makeNextPath(router.pathname, page - 1, router.query));
      } else if (idx === "다음") {
        if (page + 1 <= Number(totalPage)) return router.push(makeNextPath(router.pathname, page + 1, router.query));
      } else router.push(makeNextPath(router.pathname, idx, router.query));
    },
    [page, totalPage, router]
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

export default Pagination;
