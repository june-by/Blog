import { useRouter } from "next/router";
import React, { useCallback } from "react";
import styles from "./styles.module.scss";

interface Props {
  tag: string;
}

const TagIcon = ({ tag }: Props) => {
  const router = useRouter();

  const onClickTag = useCallback(
    (tag: string) => () => {
      return router.push({
        pathname: "/posts",
        query: { tag: tag },
      });
    },
    [router]
  );

  return (
    <li data-testid="tagIcon" onClick={onClickTag(tag)} className={styles.TagIcon}>
      {tag}
    </li>
  );
};

export default TagIcon;
