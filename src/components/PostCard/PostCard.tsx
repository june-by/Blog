import React from "react";
import styles from "./PostCard.styles.module.scss";
import { Post } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";
import { AiFillTag } from "react-icons/ai";
import { formatDate } from "@/utils";

const PostCard = (post: Post) => {
  return (
    <Link
      key={post._id}
      href={post.slug}
      className="block p-0 md:flex w-full gap-6 group"
    >
      <figure className="sm: min-h-[11.25rem] rounded-sm overflow-hidden w-full after:content-[''] after:block after:pb-[60%] md:w-[40%] relative items-center justify-center">
        <Image
          src={post.thumbNail}
          fill
          loading="lazy"
          alt={post.title}
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </figure>
      <article className={styles.articleWrap}>
        <h2 className="group-hover:underline decoration-2">{post.title}</h2>
        {post.description && <p className="text-sm">{post.description}</p>}
        <ul className="flex gap-1 pl-0">
          {post.tags?.map((tag, idx) => (
            <li key={`${tag}${idx}`} className="flex items-center gap-0.5">
              <AiFillTag className="text-blue-700" />
              <span className="text-sm">{tag}</span>
            </li>
          ))}
        </ul>
        <time className={styles.date}>{formatDate(post.date)}</time>
      </article>
    </Link>
  );
};

export default PostCard;

const blurDataURL =
  "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==";
