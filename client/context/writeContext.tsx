import { Category } from "constants/category";
import { useGetOnePost } from "Hooks/Post";
import { useRouter } from "next/router";
import { ChangeEvent, createContext, useContext, useEffect, useState } from "react";

interface ContextProps {
  writeSubmitData: WriteSubmitData;
  onChangeTextData: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onChangeCheckBox: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeEditorText: (e: string) => void;
  setThumbNailUrl: (e: string) => void;
  addTag: (tag: string) => void;
  deleteTag: (tag: string) => () => void;
}

interface WriteSubmitData {
  title: string;
  category: string;
  content: string;
  tagArr: string[];
  thumbNailUrl: null | string;
  isPublic: number;
}

const initialWriteSubmitData = {
  title: "",
  category: Category[0],
  content: "",
  tagArr: [],
  thumbNailUrl: null,
  isPublic: 0,
};

export const WriteContext = createContext<ContextProps>({
  writeSubmitData: initialWriteSubmitData,
  onChangeTextData: () => {},
  onChangeCheckBox: () => {},
  onChangeEditorText: () => {},
  setThumbNailUrl: () => {},
  addTag: () => {},
  deleteTag: () => () => {},
});

export const WriteContainer = ({ children }: { children: JSX.Element }) => {
  const [writeSubmitData, setWriteSubmitData] = useState<WriteSubmitData>(initialWriteSubmitData);

  const onChangeTextData = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setWriteSubmitData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onChangeCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWriteSubmitData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: Number(e.target.checked),
      };
    });
  };

  const onChangeEditorText = (content: string) => {
    setWriteSubmitData((prevData) => {
      return {
        ...prevData,
        content,
      };
    });
  };

  const setThumbNailUrl = (thumbNailUrl: string) => {
    setWriteSubmitData((prevData) => {
      return {
        ...prevData,
        thumbNailUrl,
      };
    });
  };

  const addTag = (addedTag: string) => {
    setWriteSubmitData((prevData) => {
      return {
        ...prevData,
        tagArr: [...prevData.tagArr, addedTag],
      };
    });
  };

  const deleteTag = (deletedTag: string) => () => {
    setWriteSubmitData((prevData) => {
      return {
        ...prevData,
        tagArr: prevData.tagArr.filter((tag) => tag !== deletedTag),
      };
    });
  };
  useSetEditData(setWriteSubmitData);

  return (
    <WriteContext.Provider
      value={{
        writeSubmitData,
        onChangeTextData,
        onChangeCheckBox,
        onChangeEditorText,
        setThumbNailUrl,
        addTag,
        deleteTag,
      }}
    >
      {children}
    </WriteContext.Provider>
  );
};

export const useWriteContext = () => {
  return useContext(WriteContext);
};

function useSetEditData(setWriteSubmitData: React.Dispatch<React.SetStateAction<WriteSubmitData>>) {
  const { query } = useRouter();
  const { data, isLoading } = useGetOnePost(Number(query.id));

  const post = data?.mainPost;

  useEffect(() => {
    if (query.mode !== "Edit") return;
    if (isLoading) return;
    if (!post) return;
    setWriteSubmitData({
      title: post.title,
      category: post.category,
      content: post.content,
      tagArr: post.Tags.map((tag) => String(tag?.content)),
      thumbNailUrl: String(post.thumbNailUrl),
      isPublic: post.isPublic,
    });
  }, [post, isLoading, query]);
}
