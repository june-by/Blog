import { AllSeriesAPIType } from "Types/series";
import { ArrayElement } from "Types/utils";
import Link from "next/link";
import React from "react";
import isNull from "utils/isNull";
import Image from "next/image";
import styles from "./styles.module.scss";
import dateForm from "utils/dateForm";

const SeriesCard = ({
  id,
  title,
  thumbNailUrl,
  shortDescription,
  createdAt,
  Posts,
}: ArrayElement<AllSeriesAPIType>) => {
  const isThumbNailExist = !isNull(thumbNailUrl);

  return (
    <Link href={`/?series=${title}`} className={styles.SeriesCard}>
      <figure className={styles.thumbnailImgWrapper}>
        {isThumbNailExist ? (
          <div>1</div>
        ) : (
          <picture>
            <source
              data-srcset="https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/Original.png"
              type="image/webp"
            />
            <Image
              fill
              src="https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/Original.png"
              alt="category"
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
          </picture>
        )}
      </figure>
      <article className={styles.articleWrap}>
        <div>
          <h2>{title}</h2>
          <div className={styles.shortDescription}>
            <span>{shortDescription}</span>
          </div>
        </div>
        <div className={styles.bottom}>
          <div>
            <span>{Posts.length}개의 포스트</span>
          </div>
          ﹒<time>{dateForm(createdAt)}</time>
        </div>
      </article>
    </Link>
  );
};

export default SeriesCard;

const blurDataURL =
  "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==";
