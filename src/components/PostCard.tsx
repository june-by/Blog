import React from "react";
import { Post } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/utils";
import TagList from "./TagList";

const PostCard = (post: Post) => {
  return (
    <Link
      key={post._id}
      href={post.slug}
      className="block p-0 md:flex w-full gap-6 group"
    >
      <figure className="sm: min-h-[11.25rem] rounded-sm overflow-hidden w-full after:content-[''] after:block after:pb-[60%] md:w-[40%] relative">
        <Image
          src={post.thumbNail}
          fill
          loading="lazy"
          alt={post.title}
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </figure>
      <article className="flex flex-col justify-between w-full p-1 sm:w-[calc(55%-1.5rem)] sm:p-0">
        <h2 className="group-hover:underline decoration-2 font-bold text-xl sm:text-2xl">
          {post.title}
        </h2>
        {post.description && <p className="text-sm">{post.description}</p>}
        <TagList tags={post.tags} />
        <time className="mt-1 text-sm">{formatDate(post.date)}</time>
      </article>
    </Link>
  );
};

export default PostCard;

const blurDataURL =
  "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==";
