import Link from "next/link";
import React from "react";
import { TagType } from "Types/post";
import styles from "./styles.module.scss";

const PostTagBtn = ({ tag }: { tag: TagType | null }) => {
  return (
    <li className={styles.PostTagButton}>
      <Link href={`/posts?tag=${tag?.content}`} data-testid="postTagBtn">
        #{tag?.content}
      </Link>
    </li>
  );
};

export default React.memo(PostTagBtn);
