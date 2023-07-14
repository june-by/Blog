import useSetDefaultThumbNail from "components/write/useSetDefaultThumbNail";
import { Category } from "constants/category";
import { useGetOnePost } from "Hooks/Post";
import useQueryId from "Hooks/useQueryId";
import { useRouter } from "next/router";
import { ChangeEvent, createContext, Dispatch, useContext, useEffect, useReducer } from "react";

type Action =
  | { type: "editTitle"; title: string }
  | { type: "editCategory"; category: string }
  | { type: "editContent"; content: string }
  | { type: "addTag"; tag: string }
  | { type: "removeTag"; tag: string }
  | { type: "editThumbNailUrl"; thumbNailUrl: string }
  | { type: "editIsPublic"; isPublic: Number }
  | { type: "initializeWriteFormData"; initData: State };

interface State {
  title: string;
  category: string;
  content: string;
  tagArr: string[];
  thumbNailUrl: null | string;
  isPublic: number;
}

interface ContextProps {
  writeFormData: State;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeCategory: (e: ChangeEvent<HTMLSelectElement>) => void;
  onChangeContent: (content: string) => void;
  addTag: (tag: string) => void;
  removeTag: (tag: string) => void;
  setThumbNailUrl: (thumbNailUrl: string) => void;
  onChangeIsPublic: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const initialState = {
  title: "",
  category: Category[0],
  content: "",
  tagArr: [],
  thumbNailUrl: null,
  isPublic: 0,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "editTitle":
      return { ...state, title: action.title };
    case "editCategory":
      return { ...state, category: action.category };
    case "editContent":
      return { ...state, content: action.content };
    case "addTag":
      return { ...state, tagArr: [...state.tagArr, action.tag] };
    case "removeTag":
      return { ...state, tagArr: state.tagArr.filter((tag) => tag !== action.tag) };
    case "editThumbNailUrl":
      return { ...state, thumbNailUrl: action.thumbNailUrl };
    case "editIsPublic":
      return { ...state, isPublic: Number(action.isPublic) };
    case "initializeWriteFormData":
      return { ...action.initData };
  }
};

export const WriteContext = createContext<ContextProps>({
  writeFormData: initialState,
  onChangeTitle: () => {},
  onChangeCategory: () => {},
  onChangeContent: () => {},
  addTag: () => {},
  removeTag: () => {},
  setThumbNailUrl: () => () => {},
  onChangeIsPublic: () => {},
});

export const WriteContainer = ({ children }: { children: JSX.Element }) => {
  const [writeFormData, dispatch] = useReducer(reducer, initialState);

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "editTitle", title: e.target.value });
  };

  const onChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "editCategory", category: e.target.value });
  };

  const onChangeContent = (content: string) => {
    dispatch({ type: "editContent", content });
  };

  const addTag = (tag: string) => {
    dispatch({ type: "addTag", tag });
  };

  const removeTag = (tag: string) => {
    dispatch({ type: "removeTag", tag });
  };

  const setThumbNailUrl = (thumbNailUrl: string) => {
    dispatch({ type: "editThumbNailUrl", thumbNailUrl });
  };

  const onChangeIsPublic = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "editIsPublic", isPublic: Number(e.target.checked) });
  };

  useInitializeWriteFormData(dispatch);

  return (
    <WriteContext.Provider
      value={{
        writeFormData,
        onChangeTitle,
        onChangeCategory,
        onChangeContent,
        addTag,
        removeTag,
        setThumbNailUrl,
        onChangeIsPublic,
      }}
    >
      {children}
    </WriteContext.Provider>
  );
};

export const useWriteContext = () => {
  return useContext(WriteContext);
};

function useInitializeWriteFormData(dispatch: Dispatch<Action>) {
  const { query } = useRouter();
  const postId = useQueryId();
  const { data, isLoading } = useGetOnePost(postId, { enabled: isNaN(postId) ? false : true });

  const post = data?.mainPost;

  useEffect(() => {
    if (query.mode !== "Edit") return;
    if (isLoading) return;
    if (!post) return;
    const initData = {
      title: post.title,
      category: post.category,
      content: post.content,
      tagArr: post.Tags.map((tag) => String(tag?.content)),
      thumbNailUrl: String(post.thumbNailUrl),
      isPublic: post.isPublic,
    };
    dispatch({ type: "initializeWriteFormData", initData });
  }, [post, isLoading, query]);
}
