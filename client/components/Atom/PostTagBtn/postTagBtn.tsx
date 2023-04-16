import { useRouter } from "next/router";
import React from "react";
import { TagType } from "Types/post";
import styles from "./styles.module.scss";

const PostTagBtn = ({ tag }: { tag: TagType | null }) => {
  const router = useRouter();

  const onClickTag = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, tag: string) => {
    e.stopPropagation();
    router.push({
      pathname: "/posts",
      query: { tag: tag },
    });
  };

  return (
    <li data-testid="postTagBtn" className={styles.PostTagButton} onClick={(e) => onClickTag(e, String(tag?.content))}>
      #{tag?.content}
    </li>
  );
};

export default React.memo(PostTagBtn);
