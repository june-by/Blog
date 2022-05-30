import React from "react";
import styles from "./styles.module.scss";
import SyncLoader from "react-spinners/SyncLoader";
import PostTopSkeleton from "../../components/Block/Post/PostTop/Skeleton";
import PostContentSkeleton from "../../components/Block/Post/PostContent/Skeleton";

const Loading = (loading: boolean, nextUrl: string) => {
	console.log(nextUrl);
	return (
		<>

			{nextUrl.includes('/post/') ?
				<>
					<div className={styles.HeaderSkeleton}></div>
					<div className={styles.PostSkeletonWrapper}>
						<PostTopSkeleton />
						<PostContentSkeleton />
					</div>
				</>
				:
				<div className={styles.LoaderWrapper}>
					<SyncLoader loading={loading} size={15} color="#0099fa"></SyncLoader>
				</div>
			}

		</>
	);
};

export default Loading;
