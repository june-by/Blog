import { useRouter } from "next/router";
import React from "react";
import { PostsType } from "../../../types/Post";
import PostCard from "../../atom/PostCard";
import PostCardSkeleton from "../../atom/PostCard/Skeleton";
import styles from "./styles.module.scss";
interface Props {
  posts: Array<PostsType> | undefined;
  isLoading: boolean;
}
const Posts = ({ posts, isLoading }: Props) => {
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
            {Array.from({ length: 12 }, () => 0).map((_, idx) => {
              return <PostCardSkeleton key={idx} />;
            })}
          </>
        )}
      </>
    </div>
  );
};

export default Posts;
