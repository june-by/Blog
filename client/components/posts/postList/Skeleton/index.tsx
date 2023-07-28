import React from "react";
// import PostCardSkeleton from "components/posts/postList/postCard/skeleton";
import styles from "./styles.module.scss";
import Header from "components/Header";
import PostsListLayout from "../layout";

const PostsSkelton = () => {
  return (
    <>
      <Header />
      <div className={styles.SkeletonWrapper}>
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
