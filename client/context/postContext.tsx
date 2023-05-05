import DUMMY from "constants/dummy";
import { createContext, useContext } from "react";
import { MainPost } from "Types/post";

interface Props {
  children: JSX.Element;
  Post: MainPost;
}

interface ContextProps {
  Post: MainPost | null;
}

export const PostContext = createContext<ContextProps>({
  Post: DUMMY.POST.mainPost,
});

export const PostContainer = ({ children, Post }: Props) => {
  return <PostContext.Provider value={{ Post }}>{children}</PostContext.Provider>;
};

export const usePostContext = () => {
  return useContext(PostContext);
};
