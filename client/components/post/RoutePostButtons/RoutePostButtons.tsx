import React from "react";
import styles from "./styles.module.scss";
import RoutePostButton from "../RoutePostButtons/RoutePostButton";
import { PostPageDataType } from "@Types/post";

const RoutePostButtons = ({
  prevPost,
  nextPost,
}: Pick<PostPageDataType, "prevPost" | "nextPost">) => {
  const { OtherId: prevPostId, OtherTitle: prevPostTitle } = prevPost;
  const { OtherId: nextPostId, OtherTitle: nextPostTitle } = nextPost;

  return (
    <div className={styles.RoutePostButtons}>
      <RoutePostButton
        direction="prev"
        postId={prevPostId}
        postTitle={prevPostTitle}
      />
      <RoutePostButton
        direction="next"
        postId={nextPostId}
        postTitle={nextPostTitle}
      />
    </div>
  );
};

export default RoutePostButtons;
