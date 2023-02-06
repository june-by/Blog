import { useRouter } from "next/router";
import { useEffect } from "react";
import { useGetOnePost } from "./Post";

interface Props {
  titleRef: React.RefObject<HTMLInputElement>;
  setCategoryInfo: React.Dispatch<React.SetStateAction<string>>;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  setTagArr: React.Dispatch<React.SetStateAction<string[]>>;
  setThumbNailUrl: React.Dispatch<React.SetStateAction<string | null>>;
  setIsPublic: React.Dispatch<React.SetStateAction<number>>;
}

const useSetEditData = ({ titleRef, setCategoryInfo, setContent, setTagArr, setThumbNailUrl, setIsPublic }: Props) => {
  const { query } = useRouter();
  const { data, isLoading } = useGetOnePost(Number(query.id));
  const Post = data?.mainPost;
  useEffect(() => {
    if (Post && !isLoading && query.mode === "Edit") {
      titleRef!.current!.value = Post.title;
      setCategoryInfo(Post.category);
      setContent(Post.content);
      setTagArr(Post.Tags.map((tag) => String(tag?.content)));
      setThumbNailUrl(String(Post.thumbNailUrl));
      setIsPublic(Post.isPublic);
    }
  }, [Post, isLoading, query]);
};

export default useSetEditData;
