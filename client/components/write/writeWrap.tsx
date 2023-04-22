import React from "react";
import styles from "./@styles.module.scss";
import dynamic from "next/dynamic";
import ThumbNailPicker from "components/write/thumbNailPicker";
import TitleInput from "./titleInput";
import IsPublicCheckBox from "./isPublicCheckBox";
import CategorySelector from "./categorySelector";
import TagList from "./tagList";
import TagForm from "./tagForm";
import SubmitButton from "./submitButton";
const Editor = dynamic(() => import("./editor"), {
  ssr: false,
});

const WriteWrap = () => {
  return (
    <div className={styles.Write}>
      <div className={styles.titleArea}>
        <TitleInput />
        <IsPublicCheckBox />
        <SubmitButton />
      </div>
      <div className={styles.etcArea}>
        <CategorySelector />
        <div className={styles.tagWrap}>
          <TagForm />
          <TagList />
        </div>
      </div>
      <Editor />
      <ThumbNailPicker />
    </div>
  );
};

export default WriteWrap;
