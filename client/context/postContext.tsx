import { createContext, ReactNode, useContext } from "react";
import { PostContextDataType, PostType } from "Types/post";

interface Props {
  children: ReactNode;
  Post: PostContextDataType;
}

export const PostContext = createContext<PostContextDataType | null>(null);

export const PostContainer = ({ children, Post }: Props) => {
  return (
    <PostContext.Provider value={{ ...Post }}>{children}</PostContext.Provider>
  );
};

export const usePostContext = () => {
  const contextProps = useContext(PostContext);

  if (!contextProps) throw Error("PostContext is used before initialization");

  return useContext(PostContext) as PostContextDataType;
};
