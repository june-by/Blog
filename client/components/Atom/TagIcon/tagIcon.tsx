import { useRouter } from "next/router";
import React from "react";
import styles from "./styles.module.scss";

interface Props {
  tag: string;
}

const TagIcon = ({ tag }: Props) => {
  const router = useRouter();

  const onClickTag = (tag: string) => () => {
    return router.push({
      pathname: "/posts",
      query: { tag },
    });
  };

  return (
    <li data-testid="tagIcon" onClick={onClickTag(tag)} className={styles.TagIcon}>
      {tag}
    </li>
  );
};

export default React.memo(TagIcon);
