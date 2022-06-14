import { useRouter } from "next/router";
import React from "react";
import { PostsType } from "../../../Types/Post";
import PostCard from "../../Atom/PostCard";
import styles from "./styles.module.scss";
const Posts = ({ posts }: { posts: Array<PostsType> }) => {
  const { query } = useRouter();
  return (
    <div className={query.search || query.tag ? `${styles.PostsRoot} ${styles.TagAndSearch}` : `${styles.PostsRoot} ${styles.Default}`}>
      <>
        {posts?.map((post: PostsType, idx: number) => {
          return <PostCard key={idx} post={post} />;
        })}
      </>
    </div>
  );
};

export default Posts;
