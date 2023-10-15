import React from "react";
import styles from "./styles.module.scss";
import { usePostContext } from "@contexts/postContext";
import SeriesList from "./SeriesList";
import { useBooleanState } from "@hooks";
import BookmarkIcon from "components/Icon/bookmark";
import SeriesIndexHandler from "./SeriesIndexHandler";
import ShowMoreButton from "components/shared/ShowMoreButton/ShowMoreButton";

const SeriesInfo = () => {
  const {
    SeriesId,
    seriesPosts,
    id: currentPostId,
    seriesTitle,
  } = usePostContext();

  const [isSeriesOpen, , , toggleSeriesOpen] = useBooleanState(false);

  if (!SeriesId || !seriesPosts) {
    return null;
  }

  const currentPostIdx =
    seriesPosts.findIndex(({ id }) => id === currentPostId) + 1;

  return (
    <div className={styles.SeriesInfo}>
      <BookmarkIcon className={styles.bookMarkSVG} />
      <h2>{seriesTitle}</h2>
      {isSeriesOpen && <SeriesList seriesPosts={seriesPosts} />}
      <div className={styles.bottom}>
        <ShowMoreButton
          showMore={isSeriesOpen}
          toggleShowMore={toggleSeriesOpen}
        />
        <SeriesIndexHandler
          seriesPosts={seriesPosts}
          currentPostIdx={currentPostIdx}
        />
      </div>
    </div>
  );
};

export default SeriesInfo;
