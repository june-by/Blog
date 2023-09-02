import { createContext, useContext } from "react";
import { PostType } from "Types/post";

interface Props {
  children: JSX.Element;
  Post: PostType;
}

type PostContextProps = Pick<Props, "Post">;

export const PostContext = createContext<PostContextProps | null>(null);

export const PostContainer = ({ children, Post }: Props) => {
  return (
    <PostContext.Provider value={{ Post }}>{children}</PostContext.Provider>
  );
};

export const usePostContext = () => {
  const contextProps = useContext(PostContext);

  if (!contextProps) throw Error("PostContext is used before initialization");

  return useContext(PostContext) as PostContextProps;
};
