import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { TagType } from "Types/post";
import styles from "./styles.module.scss";

const PostTagBtn = ({ tag }: { tag: TagType | null }) => {
  const router = useRouter();

  const onClickTag = useCallback(
    (e: React.MouseEvent<HTMLLIElement, MouseEvent>, tag: string) => {
      e.stopPropagation();
      return router.push({
        pathname: "/posts",
        query: { tag: tag },
      });
    },
    [router]
  );

  return (
    <li data-testid="postTagBtn" className={styles.PostTagButton} onClick={(e) => onClickTag(e, String(tag?.content))}>
      #{tag?.content}
    </li>
  );
};

export default React.memo(PostTagBtn);
