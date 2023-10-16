import Link from "next/link";
import React, { memo } from "react";
import { TagType } from "@Types";
import styles from "./styles.module.scss";
import { AiFillTag } from "react-icons/ai";

const TagButton = ({ tag }: { tag: TagType }) => {
  if (!tag) {
    return null;
  }

  return (
    <Link href={`/?tag=${tag?.content}`} data-testid="tagButton">
      <li className={styles.TagButton}>
        <AiFillTag />
        <span>{tag?.content}</span>
      </li>
    </Link>
  );
};

export default memo(TagButton);
