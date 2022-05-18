import { customAxios } from "../../utils/CustomAxios"

export const getMainPostsAPI = async (page: number) => {
	const { data } = await customAxios.get(`/posts/load/main/${page}`);
	return data;
}

export const getPostsNumAPI = async (category: string) => {
	const { data } = await customAxios.get(`/posts/load/length/${category}`);
	return data;
}

export const getOnePostAPI = async (id: number) => {
	const { data } = await customAxios.get(`/post/load/${id}`);
	return data;
}