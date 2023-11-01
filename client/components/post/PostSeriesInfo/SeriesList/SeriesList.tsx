import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import classnames from "classnames";
import { PostType } from "@Types";

const SeriesList = ({
  seriesPosts,
  id: currentPostId,
}: Pick<PostType, "seriesPosts" | "id">) => {
  return (
    <ol className={styles.SeriesList}>
      {seriesPosts.map(({ id, title }) => (
        <li
          key={id}
          className={classnames({
            [styles.current]: currentPostId === id,
          })}
        >
          <Link href={`/post/${id}`}>{title}</Link>
        </li>
      ))}
    </ol>
  );
};

export default SeriesList;
