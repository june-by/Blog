import React from "react";
import CategoryChipSkeleton from "components/shared/categoryChip/Skeleton";
// import PostCardSkeleton from "components/posts/postList/postCard/skeleton";
import styles from "./styles.module.scss";
import { Category } from "constants/category";
import Header from "components/Header";
import PostsListLayout from "../layout";

const PostsSkelton = () => {
  return (
    <>
      <Header />
      <div className={styles.SkeletonWrapper}>
        <div className={styles.CategoryChipWrapper}>
          {Category.map((v) => (
            <CategoryChipSkeleton key={v} />
          ))}
        </div>
        <PostsListLayout>
          {/* <>
            {Array.from({ length: 16 }, () => 0).map((_, idx) => {
              return <PostCardSkeleton key={idx} />;
            })}
          </> */}
        </PostsListLayout>
      </div>
    </>
  );
};

export default PostsSkelton;
