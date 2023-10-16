import { AllSeriesAPIType, ArrayElement } from "@Types";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import CustomWebPImage from "@components/shared/CustomWebPImage";
import { DATE_FORM, convertDateToString, isNull } from "@utils";

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
          <Image
            src={thumbNailUrl as string}
            fill
            alt="category"
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        ) : (
          <CustomWebPImage
            webPSrc="https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/Original.png"
            fallbackSrc="https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/Original.png"
            alt="thumbNail"
          />
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
          ﹒
          <time>
            {convertDateToString({
              date: createdAt,
              converter: DATE_FORM["ko"],
            })}
          </time>
        </div>
      </article>
    </Link>
  );
};

export default SeriesCard;

const blurDataURL =
  "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==";
