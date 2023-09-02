import { Category } from "constants/category";
import { useGetPostQuery } from "Hooks/Post";
import useQueryId from "Hooks/useQueryId";
import { useRouter } from "next/router";
import {
  ChangeEvent,
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { PostFormType } from "Types/post";

type Action =
  | { type: "editTitle"; title: PostFormType["title"] }
  | { type: "editCategory"; category: PostFormType["category"] }
  | { type: "editContent"; content: PostFormType["content"] }
  | { type: "addTag"; tag: string }
  | {
      type: "removeTag";
      tag: string;
    }
  | { type: "editThumbNailUrl"; thumbNailUrl: PostFormType["thumbNailUrl"] }
  | { type: "editIsPublic"; isPublic: PostFormType["isPublic"] }
  | {
      type: "editShortDescription";
      shortDescription: PostFormType["shortDescription"];
    }
  | { type: "initializeWriteFormData"; initData: PostFormType }
  | { type: "editSeries"; SeriesId: PostFormType["SeriesId"] };

interface ContextProps {
  writeFormData: PostFormType;
  handleChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeCategory: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleChangeContent: (content: string) => void;
  addTag: (tag: string) => void;
  removeTag: (tag: string) => void;
  setThumbNailUrl: (thumbNailUrl: string) => void;
  handleChangeIsPublic: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeShortDescription: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeSeries: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const initialState = {
  title: "",
  category: Category[0],
  content: "",
  tagArr: [],
  thumbNailUrl: null,
  isPublic: 0,
  shortDescription: "",
  SeriesId: null,
};

const reducer = (state: PostFormType, action: Action): PostFormType => {
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
      return {
        ...state,
        tagArr: state.tagArr.filter((tag) => tag !== action.tag),
      };
    case "editThumbNailUrl":
      return { ...state, thumbNailUrl: action.thumbNailUrl };
    case "editIsPublic":
      return { ...state, isPublic: Number(action.isPublic) };
    case "editShortDescription": {
      if (action.shortDescription.length > 200) {
        alert("200자 초과");
        return { ...state };
      }
      return { ...state, shortDescription: action.shortDescription };
    }
    case "editSeries": {
      return { ...state, SeriesId: action.SeriesId };
    }
    case "initializeWriteFormData":
      return { ...action.initData };
  }
};

export const WriteContext = createContext<ContextProps>({
  writeFormData: initialState,
  handleChangeTitle: () => {},
  handleChangeCategory: () => {},
  handleChangeContent: () => {},
  addTag: () => {},
  removeTag: () => {},
  setThumbNailUrl: () => () => {},
  handleChangeIsPublic: () => {},
  handleChangeShortDescription: () => {},
  handleChangeSeries: () => {},
});

export const WriteContainer = ({ children }: { children: JSX.Element }) => {
  const [writeFormData, dispatch] = useReducer(reducer, initialState);

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "editTitle", title: e.target.value });
  };

  const handleChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "editCategory", category: e.target.value });
  };

  const handleChangeContent = (content: string) => {
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

  const handleChangeIsPublic = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "editIsPublic", isPublic: Number(e.target.checked) });
  };

  const handleChangeShortDescription = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "editShortDescription",
      shortDescription: e.target.value,
    });
  };

  const handleChangeSeries = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "editSeries", SeriesId: Number(e.target.value) });
  };

  useInitializeWriteFormData(dispatch);

  return (
    <WriteContext.Provider
      value={{
        writeFormData,
        handleChangeTitle,
        handleChangeCategory,
        handleChangeContent,
        addTag,
        removeTag,
        setThumbNailUrl,
        handleChangeIsPublic,
        handleChangeShortDescription,
        handleChangeSeries,
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
  const { data, isLoading } = useGetPostQuery(postId, {
    enabled: isNaN(postId) ? false : true,
  });

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
      shortDescription: post?.shortDescription,
      SeriesId: post?.SeriesId,
    };
    dispatch({ type: "initializeWriteFormData", initData });
  }, [post, isLoading, query, dispatch]);
}
