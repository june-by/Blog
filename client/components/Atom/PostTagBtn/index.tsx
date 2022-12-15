import { useRouter } from "next/router";
import React, { useCallback, useContext } from "react";
import { TagType } from "Types/Post";
import { ThemeContext } from "utils/ThemeContext";
import styles from "./styles.module.scss";

const PostTagBtn = ({ tag }: { tag: TagType | null }) => {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);

  const onClickTag = useCallback(
    (e: React.MouseEvent<HTMLLIElement, MouseEvent>, tag: string) => {
      e.stopPropagation();
      return router.push({
        pathname: "/filter",
        query: { tag: tag },
      });
    },
    [router]
  );

  return (
    <li
      data-testid="postTagBtn"
      className={`${styles.PostTagButton} ${styles[theme]}`}
      onClick={(e) => onClickTag(e, String(tag?.content))}
    >
      #{tag?.content}
    </li>
  );
};

export default React.memo(PostTagBtn);
