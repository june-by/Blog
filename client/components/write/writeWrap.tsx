import React from "react";
import { WriteContainer } from "context/writeContext";
import dynamic from "next/dynamic";
import ThumbNailPicker from "components/write/thumbNailPicker";
import TitleInput from "./titleInput";
import IsPublicCheckBox from "./isPublicCheckBox";
import CategorySelector from "./categorySelector";
import TagList from "./tagList";
import TagForm from "./tagForm";
import SubmitButton from "./submitButton";
import ShortDescription from "./ShortDescription";
import SeriesSelector from "./seriesSelector";
const Editor = dynamic(() => import("./editor"), {
  ssr: false,
});

const WriteForm = Object.assign(
  ({ children }: { children: JSX.Element }) => (
    <WriteContainer>{children}</WriteContainer>
  ),
  {
    Title: TitleInput,
    IsPublicCheckBox,
    SubmitButton,
    CategorySelector,
    TagInput: TagForm,
    TagList,
    SeriesSelector,
    ShortDescription,
    Editor,
    ThumbNailPicker,
  }
);

export default WriteForm;
