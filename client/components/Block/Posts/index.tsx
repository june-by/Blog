import { useRouter } from "next/router";
import React from "react";
import { PostsType } from "../../../Types/Post";
import PostCard from "../../Atom/PostCard";
import PostCardSkeleton from "../../Atom/PostCard/Skeleton";
import styles from "./styles.module.scss";
const Posts = ({ posts, isLoading }: { posts: Array<PostsType> | undefined; isLoading: boolean }) => {
  const { query } = useRouter();
  return (
    <div className={query.search || query.tag ? `${styles.PostsRoot} ${styles.TagAndSearch}` : `${styles.PostsRoot} ${styles.Default}`}>
      <>
        {!isLoading ? (
          <>
            {posts?.map((post: PostsType, idx: number) => {
              return <PostCard key={idx} post={post} />;
            })}
          </>
        ) : (
          <>
            {Array.from({ length: 8 }, () => 0).map((_, idx) => {
              return <PostCardSkeleton key={idx} />;
            })}
          </>
        )}
      </>
    </div>
  );
};

export default Posts;
