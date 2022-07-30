import { useRouter } from "next/router";
import React, { useCallback, useContext } from "react";
import { ThemeContext } from "../../../utils/ThemeContext";
import styles from "./styles.module.scss";

interface Props {
  tag: string;
}

const TagIcon = ({ tag }: Props) => {
  const { theme } = useContext(ThemeContext);
  const { push } = useRouter();
  const onClickTag = useCallback(
    (tag: string) => () => {
      return push({
        pathname: "/filter",
        query: { tag: tag },
      });
    },
    [push]
  );
  return (
    <div className={`${styles.TagIcon} ${styles[String(theme)]}`} onClick={onClickTag(tag)}>
      {tag}
    </div>
  );
};

export default TagIcon;
