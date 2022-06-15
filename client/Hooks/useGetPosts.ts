import { useRouter } from "next/router";
import { PostsType } from "../Types/Post";
import { useGetCategoryPosts, useGetSearchPosts, useGetTagPosts } from "./Post";


type ReturnTypes = PostsType[] | undefined;

const useGetPosts = (): ReturnTypes => {
	const { query } = useRouter();
	const page = Number(query.page);
	const { data: CategoryPost } = useGetCategoryPosts(query.category, page);
	const { data: SearchPosts } = useGetSearchPosts(query.search);
	const { data: TagPost } = useGetTagPosts(query.tag);
	if (query.category) return CategoryPost;
	else if (query.search) return SearchPosts;
	else if (query.tag) return TagPost;
	else return [DummyPosts];
};

const DummyPosts = {
	category: "",
	createdAt: new Date(),
	id: 0,
	title: "",
	Tags: [null],
	thumbNailUrl: null,
};

export default useGetPosts;
