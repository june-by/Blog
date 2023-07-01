import Link from "next/link";
import React from "react";
import { TagType } from "Types/post";
import styles from "./styles.module.scss";

const TagButton = ({ tag }: { tag: TagType | null }) => {
  return (
    <li className={styles.TagButton}>
      <Link href={`/?tag=${tag?.content}`} data-testid="tagButton">
        #{tag?.content}
      </Link>
    </li>
  );
};

export default React.memo(TagButton);
