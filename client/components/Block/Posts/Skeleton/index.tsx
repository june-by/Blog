import React from "react";
import PostCardSkeleton from "../../../Atom/PostCard/Skeleton";
import HeaderSkeleton from "../../../Layout/Header/Skeleton";
import styles from "../styles.module.scss";
const PostsSkelton = ({ theme }: { theme: string }) => {
  console.log(theme);
  return (
    <>
      <HeaderSkeleton theme={theme} />
      <div className={styles.SkeletonWrapper}>
        <div className={`${styles.PostsRoot} ${styles.Default}`}>
          {Array.from({ length: 12 }, () => 0).map((_, idx) => {
            return <PostCardSkeleton theme={theme} key={idx} />;
          })}
        </div>
      </div>
    </>
  );
};

export default PostsSkelton;
