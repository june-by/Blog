import React, { type ReactNode } from "react";
import styles from "./styles.module.scss";
import TextInput from "./FormItem/TextInput";
import CheckBox from "./FormItem/CheckBox";
import Selector from "./FormItem/Selector";
import Editor from "./FormItem/Editor";
import SubmitButton from "./FormItem/SubmitButton";
import ListForm from "./FormItem/ListForm";
import ImageUploader from "./FormItem/ImageUploader";

interface PostFormProps {
  children: ReactNode;
}

const PostForm = Object.assign(
  ({ children }: PostFormProps) => (
    <div className={styles.PostForm}>{children}</div>
  ),
  {
    TextInput,
    CheckBox,
    Selector,
    Editor,
    SubmitButton,
    ListForm,
    ImageUploader,
  }
);

export default PostForm;
