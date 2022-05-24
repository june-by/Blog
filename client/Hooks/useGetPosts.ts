import { useRouter } from "next/router";
import { useEffect } from "react";
import { PostsType } from "../Types/Post";
import { useGetCategoryPosts, useGetSearchPosts, useGetTagPosts } from "./Post";

interface Props {
	setPost: React.Dispatch<React.SetStateAction<PostsType[] | undefined>>;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
	pageNum: number;
}

const useGetPosts = ({ setPost, setIsLoading, pageNum }: Props) => {
	const { query } = useRouter();
	const { data: CategoryPost, isLoading: categoryLoading } = useGetCategoryPosts(query.category as string, pageNum);
	const { data: SearchPosts, isLoading: searchLoading } = useGetSearchPosts(String(query.search));
	const { data: TagPost, isLoading: tagLoading } = useGetTagPosts(query.content as string);

	useEffect(() => {
		if (query.category) {
			setPost(CategoryPost);
			setIsLoading(categoryLoading);
		}
		else if (query.search) {
			setPost(SearchPosts);
			setIsLoading(searchLoading)
		}
		else if (query.tag) {
			setPost(TagPost);
			setIsLoading(tagLoading);
		}
	}, [query])
};

export default useGetPosts;