import DUMMY from "constants/dummy";
import { createContext, useContext } from "react";
import { MainPost } from "Types/post";

interface Props {
  children: JSX.Element;
  Post: MainPost;
}

interface ContextProps {
  Post: MainPost;
}

export const PostContext = createContext<ContextProps | null>(null);

export const PostContainer = ({ children, Post }: Props) => {
  return <PostContext.Provider value={{ Post }}>{children}</PostContext.Provider>;
};

export const usePostContext = () => {
  const contextProps = useContext(PostContext);

  if (!contextProps) throw Error("PostContext is used before initialization");

  return useContext(PostContext) as ContextProps;
};
