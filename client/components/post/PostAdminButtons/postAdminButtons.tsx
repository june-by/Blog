import PostEditButton from "./postEditButton";
import React from "react";
import PostDeleteButton from "./postDeleteButton";
import { useQueryId } from "@hooks";
import styles from "./styles.module.scss";
import WithAdminValidation from "components/shared/WithAdminValidation";

const PostAdminButtons = () => {
  const postId = useQueryId();

  return (
    <WithAdminValidation>
      <div className={styles.PostAdminButtons}>
        <PostDeleteButton />
        <PostEditButton id={postId} />
      </div>
    </WithAdminValidation>
  );
};

export default PostAdminButtons;
