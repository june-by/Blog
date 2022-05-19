import { useRouter } from "next/router";
import React from "react";
import { useGetCategoryPosts } from "../../../../Hooks/Post";
import { PostsType } from "../../../../Types/Post";
import PostCard from "../../../Atom/PostCard";
import PostCardSkeleton from "../../../Atom/PostCard/Skeleton";
import styles from "../../MainPage/MainPosts/styles.module.scss";

const CategoryPosts = () => {
  const { query } = useRouter();
  const { data: CategoryPost, isLoading } = useGetCategoryPosts(query.category as string);

  return (
    <div className={styles.MainPosts}>
      {!isLoading ? (
        <>
          {CategoryPost?.map((post: PostsType, idx: number) => {
            return <PostCard key={idx} post={post} />;
          })}
        </>
      ) : (
        <>
          {Array.from({ length: 15 }, () => 0).map((_, idx) => {
            return <PostCardSkeleton key={idx} loading={true} />;
          })}
        </>
      )}
    </div>
  );
};

export default CategoryPosts;
