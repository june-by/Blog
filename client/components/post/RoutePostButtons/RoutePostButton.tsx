import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import { toast } from "react-toastify";
import MESSAGE from "constants/message";

interface Props {
  postTitle: string | null;
  postId: number | null;
  direction: "prev" | "next";
}

const DIRECTION = {
  KOREAN: {
    prev: "이전",
    next: "다음",
  },
  DESCRIPTION: {
    prev: "이전 포스트",
    next: "다음 포스트",
  },
  NO_POST_TITLE: {
    prev: MESSAGE.NO_PREV_POST,
    next: MESSAGE.NO_NEXT_POST,
  },
  ARROW_SVG: {
    prev: IoArrowBackCircleOutline,
    next: IoArrowForwardCircleOutline,
  },
  CLASSNAME: {
    prev: `${styles.prevRoutePostButton}`,
    next: `${styles.nextRoutePostButton}`,
  },
  TEST_ID: {
    prev: "gotoPrevPost",
    next: "gotoNextPost",
  },
};

const RoutePostButton = ({ direction, postTitle, postId }: Props) => {
  const ArrowSVG = DIRECTION.ARROW_SVG[direction];

  const title = postTitle ?? DIRECTION.NO_POST_TITLE[direction];

  const handleClickButton = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (!postId) {
      e.preventDefault();
      toast.warn(title);
    }
  };

  return (
    <Link
      href={`/post/${postId}`}
      className={DIRECTION.CLASSNAME[direction]}
      onClick={handleClickButton}
      data-testid={DIRECTION.TEST_ID[direction]}
    >
      <div>
        <span className={styles.RoutePostButtonDescription}>
          {DIRECTION.DESCRIPTION[direction]}
        </span>
        <span className={styles.RoutePostButtonTitle}>{title}</span>
      </div>
      <ArrowSVG />
    </Link>
  );
};

export default RoutePostButton;
