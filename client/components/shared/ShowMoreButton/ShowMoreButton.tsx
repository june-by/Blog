import React from "react";
import styles from "./styles.module.scss";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

interface Props {
  toggleShowMore: () => void;
  showMore: boolean;
  className?: string;
}
const ShowMoreButton = ({ showMore, toggleShowMore, className }: Props) => {
  return (
    <button
      className={`${styles.ShowMoreButton} ${className}`}
      onClick={toggleShowMore}
    >
      {showMore ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
      <span>{showMore ? "숨기기" : "더보기"}</span>
    </button>
  );
};

export default ShowMoreButton;
