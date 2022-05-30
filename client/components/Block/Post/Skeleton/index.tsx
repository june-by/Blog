import React from 'react'
import PostContentSkeleton from '../PostContent/Skeleton';
import PostTopSkeleton from '../PostTop/Skeleton';
import styles from './styles.module.scss';

const PostSkeleton = () => {
	return (
		<>
			<div className={styles.HeaderSkeleton}></div>
			<div className={styles.PostSkeletonWrapper}>
				<PostTopSkeleton />
				<PostContentSkeleton />
			</div>
		</>
	)
}

export default PostSkeleton