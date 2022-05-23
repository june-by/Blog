import { useRouter } from "next/router";
import { useEffect } from "react";
import { useGetOnePost } from "./Post";

interface Props {
  titleRef: React.RefObject<HTMLInputElement>;
  setCategoryInfo: React.Dispatch<React.SetStateAction<string>>;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  setTagArr: React.Dispatch<React.SetStateAction<string[]>>;
}

const useSetEditData = ({ titleRef, setCategoryInfo, setContent, setTagArr }: Props) => {
  const { query } = useRouter();
  const { data: Post, isLoading } = useGetOnePost(Number(query.id));

  useEffect(() => {
    if (Post && !isLoading && query.mode === "Edit") {
      titleRef!.current!.value = Post.title;
      setCategoryInfo(Post.category);
      setContent(Post.content);
      setTagArr(Post.Tags.map((tag) => String(tag?.content)));
    }
  }, [Post, isLoading, query]);
};

export default useSetEditData;
