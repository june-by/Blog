import { useRouter } from "next/router";
import React from "react";
import { PostsType } from "Types/Post";
import PostCard from "components/Block/PostCard";
import PostCardSkeleton from "components/Block/PostCard/Skeleton";
import styles from "./styles.module.scss";
interface Props {
  posts: Array<PostsType> | undefined;
  isLoading: boolean;
}
const Posts = ({ posts, isLoading }: Props) => {
  const { query } = useRouter();
  return (
    <section
      className={
        query.search || query.tag
          ? `${styles.PostsRoot} ${styles.TagAndSearch}`
          : `${styles.PostsRoot} ${styles.Default}`
      }
    >
      <>
        {!isLoading ? (
          <>
            {posts?.map((post: PostsType, idx: number) => {
              return <PostCard key={idx} post={post} />;
            })}
          </>
        ) : (
          <>
            {Array.from({ length: 12 }, () => 0).map((_, idx) => {
              return <PostCardSkeleton key={idx} />;
            })}
          </>
        )}
      </>
    </section>
  );
};

export default Posts;
