import React from "react";
import styles from "./styles.module.scss";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { usePostContext } from "context/postContext";
import { useRouter } from "next/router";

interface Props {
  currentPostIdx: number;
}
const SeriesIndexHandler = ({ currentPostIdx }: Props) => {
  const { seriesPosts } = usePostContext();
  const { push } = useRouter();

  const nextPostIdx = currentPostIdx + 1;
  const nextPostId =
    nextPostIdx > seriesPosts.length ? null : seriesPosts[nextPostIdx - 1].id;

  const prevPostIdx = currentPostIdx - 1;

  const prevPostId = prevPostIdx === 0 ? null : seriesPosts[prevPostIdx - 1].id;

  return (
    <div className={styles.SeriesIndexHandler}>
      <div>
        <span>
          {currentPostIdx}/{seriesPosts.length}
        </span>
      </div>
      <div>
        <button
          disabled={!prevPostId}
          onClick={() => push(`/post/${prevPostId}`)}
          data-testid="gotoPrevSeriesPostButton"
        >
          <MdOutlineKeyboardArrowLeft />{" "}
        </button>
        <button
          disabled={!nextPostId}
          onClick={() => push(`/post/${nextPostId}`)}
          data-testid="gotoNextSeriesPostButton"
        >
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default SeriesIndexHandler;
