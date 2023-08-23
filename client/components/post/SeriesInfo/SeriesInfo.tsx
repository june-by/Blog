import React from "react";
import styles from "./styles.module.scss";
import { usePostContext } from "context/postContext";
import SeriesList from "./SeriesList";
import { useBooleanState } from "Hooks/useBooleanState";
import ShowSeriesButton from "./ShowSeriesButton";
import BookmarkIcon from "components/Icon/bookmark";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useRouter } from "next/router";
const SeriesInfo = () => {
  const {
    Post: { SeriesId, seriesPosts, id: currentPostId },
  } = usePostContext();
  const { push } = useRouter();

  const [isSeriesOpen, , , toggleSeriesOpen] = useBooleanState(false);

  const currentPostIdx =
    seriesPosts.findIndex(({ id }) => id === currentPostId) + 1;

  if (!SeriesId) return null;

  const nextPostIdx = currentPostIdx + 1;
  const nextPostId =
    nextPostIdx > seriesPosts.length ? null : seriesPosts[nextPostIdx - 1].id;

  const prevPostIdx = currentPostIdx - 1;

  const prevPostId = prevPostIdx === 0 ? null : seriesPosts[prevPostIdx - 1].id;

  return (
    <div className={styles.SeriesInfo}>
      <BookmarkIcon className={styles.bookMarkSVG} />
      <h2>title</h2>
      {isSeriesOpen && <SeriesList seriesPosts={seriesPosts} />}
      <div className={styles.bottom}>
        <ShowSeriesButton
          isSeriesOpen={isSeriesOpen}
          toggleSeriesOpen={toggleSeriesOpen}
        />
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
            >
              <MdOutlineKeyboardArrowLeft />{" "}
            </button>
            <button
              disabled={!nextPostId}
              onClick={() => push(`/post/${nextPostId}`)}
            >
              <MdOutlineKeyboardArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeriesInfo;
