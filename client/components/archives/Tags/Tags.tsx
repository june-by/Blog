import { useGetAllTags } from "Hooks/Tag";
import FontAppliedElement from "components/shared/FontAppliedElement";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useBooleanState } from "Hooks/useBooleanState";

const Tags = () => {
  const [showMore, , , toggleShowMore] = useBooleanState(false);
  const data = useGetAllTags(showMore);

  if (!data) return null;

  return (
    <div className={styles.Tags}>
      <FontAppliedElement tagName="h3">
        🔗 Tags <span>({data.length})</span>
      </FontAppliedElement>
      <div className={styles.TagListWrap}>
        {data.map(({ content, Posts }) => (
          <Link key={content} href={`/?tag=${content}`}>
            <span>
              {content} ({Posts.length})
            </span>
          </Link>
        ))}
      </div>
      <button className={styles.showMoreButton} onClick={toggleShowMore}>
        {showMore ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        <span>{showMore ? "숨기기" : "더보기"}</span>
      </button>
    </div>
  );
};

export default Tags;
