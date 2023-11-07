"use client";

import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useBooleanState } from "@hooks";
import ShowMoreButton from "@components/shared/ShowMoreButton/ShowMoreButton";
import { ArchiveTagType } from "@Types/tag";

interface Props {
  tags: ArchiveTagType[];
}

const Tags = ({ tags }: Props) => {
  const [showMore, , , toggleShowMore] = useBooleanState(false);

  if (!tags) {
    return null;
  }

  const displayedTags = showMore ? tags : tags.slice(0, 20);

  return (
    <div className={styles.Tags}>
      <div className={styles.TagListWrap}>
        {displayedTags.map(({ content, Posts }) => (
          <Link key={content} href={`/?tag=${content}`}>
            <span>
              {content} ({Posts.length})
            </span>
          </Link>
        ))}
      </div>
      <ShowMoreButton toggleShowMore={toggleShowMore} showMore={showMore} />
    </div>
  );
};

export default Tags;
