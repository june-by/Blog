import React from "react";
import styles from "./styles.module.scss";
import { usePostContext } from "context/postContext";
import SeriesList from "./SeriesList";
import { useBooleanState } from "Hooks/useBooleanState";
import ShowSeriesButton from "./ShowSeriesButton";
import BookmarkIcon from "components/Icon/bookmark";
import SeriesIndexHandler from "./SeriesIndexHandler";

const SeriesInfo = () => {
  const {
    Post: { SeriesId, seriesPosts, id: currentPostId },
  } = usePostContext();

  const [isSeriesOpen, , , toggleSeriesOpen] = useBooleanState(false);

  const currentPostIdx =
    seriesPosts.findIndex(({ id }) => id === currentPostId) + 1;

  if (!SeriesId) return null;

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
        <SeriesIndexHandler currentPostIdx={currentPostIdx} />
      </div>
    </div>
  );
};

export default SeriesInfo;
