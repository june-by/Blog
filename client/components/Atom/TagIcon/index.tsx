import { useRouter } from "next/router";
import React, { useCallback, useContext } from "react";
import { ThemeContext } from "utils/ThemeContext";
import styles from "./styles.module.scss";

interface Props {
  tag: string;
}

const TagIcon = ({ tag }: Props) => {
  const { theme } = useContext(ThemeContext);
  const router = useRouter();

  const onClickTag = useCallback(
    (tag: string) => () => {
      return router.push({
        pathname: "/filter",
        query: { tag: tag },
      });
    },
    [router]
  );

  return (
    <li data-testid="tagIcon" onClick={onClickTag(tag)} className={`${styles.TagIcon} ${styles[String(theme)]}`}>
      {tag}
    </li>
  );
};

export default TagIcon;
