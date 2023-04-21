import React from 'react'
import styles from './styles.module.scss';

const PostContentSkeleton = () => {
	return (
		<div className={styles.SkeletonWrapper}>
			<div className={styles.PostContentSkeleton}></div>
			<div className={styles.TopicSkeleton}>
				{Array.from({ length: 6 }, () => 0).map((value, idx) => {
					return <div key={idx}></div>
				})}
			</div>
		</div>
	)
}

export default PostContentSkeleton