import { createContext, ReactNode, useContext } from "react";
import { PostType } from "Types/post";

interface Props {
  children: ReactNode;
  Post: PostType;
}

export const PostContext = createContext<PostType | null>(null);

export const PostContainer = ({ children, Post }: Props) => {
  return (
    <PostContext.Provider value={{ ...Post }}>{children}</PostContext.Provider>
  );
};

export const usePostContext = () => {
  const contextProps = useContext(PostContext);

  if (!contextProps) throw Error("PostContext is used before initialization");

  return useContext(PostContext) as PostType;
};
