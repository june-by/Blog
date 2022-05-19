import React from "react";
import { useGetMainPost } from "../../../../Hooks/Post";
import { PostsType } from "../../../../Types/Post";
import PostCard from "../../../Atom/PostCard";
import PostCardSkeleton from "../../../Atom/PostCard/Skeleton";
import styles from "./styles.module.scss";

interface Props {
  pageNum: number;
}

const MainPosts = ({ pageNum }: Props) => {
  const { data: MainPosts, isLoading } = useGetMainPost(pageNum);

  return (
    <div className={styles.MainPosts}>
      <>
        {!isLoading ? (
          <>
            {MainPosts?.map((post: PostsType, idx: number) => {
              return <PostCard key={idx} post={post} />;
            })}
          </>
        ) : (
          <>
            {Array.from({ length: 12 }, () => 0).map((_, idx) => {
              return <PostCardSkeleton key={idx} loading={isLoading} />;
            })}
          </>
        )}
      </>
    </div>
  );
};

export default MainPosts;
