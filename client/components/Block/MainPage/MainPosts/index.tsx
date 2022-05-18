import React from 'react'
import { useGetMainPost } from '../../../../Hooks/Post';
import { DummyType } from '../../../../Types/Dummy';
import { DummyPosts } from '../../../../utils/Dummy'
import PostCard from '../../../Atom/PostCard';
import PostCardSkeleton from '../../../Atom/PostCard/Skeleton';
import styles from './styles.module.scss';

interface Props {
	pageNum: number;
}

const MainPosts = ({ pageNum }: Props) => {
	//const { data: MainPosts, isLoading } = useGetMainPost(pageNum);
	return (
		<div className={styles.MainPosts}>
			{true ?
				<>
					{DummyPosts?.map((post: DummyType, idx) => {
						return <PostCard key={post.title + String(idx)} post={post} />
					})}
				</>
				:
				<>
					{Array.from({ length: 15 }, () => 0).map((value) => {
						return <PostCardSkeleton key={value} loading={true} />
					})}
				</>
			}
		</div>
	)
}

export default MainPosts