import React from "react";
import styles from "./styles.module.scss";
import SyncLoader from "react-spinners/SyncLoader";
import PostSkeleton from "../../components/Block/Post/Skeleton";

const Loading = (loading: boolean, nextUrl: string) => {
	return (
		<>
			{IsPostPage(nextUrl) ?
				<PostSkeleton />
				:
				<div className={styles.LoaderWrapper}>
					<SyncLoader loading={loading} size={15} color="#0099fa"></SyncLoader>
				</div>
			}
		</>
	);
};

const IsPostPage = (url: string) => {
	return url.includes('/post/') ? true : false
}

export default Loading;
