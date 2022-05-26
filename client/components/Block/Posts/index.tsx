import React from "react";
import { PostsType } from "../../../Types/Post";
import PostCard from "../../Atom/PostCard";
import PostCardSkeleton from "../../Atom/PostCard/Skeleton";
import styles from "./styles.module.scss";
const Posts = ({ posts, isLoading }: { posts: Array<PostsType> | undefined; isLoading: boolean }) => {
	return (
		<div className={styles.PostsRoot}>
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
							return <PostCardSkeleton key={idx} loading={isLoading} />;
						})}
					</>
				)}
			</>
		</div>
	);
};

export default Posts;
