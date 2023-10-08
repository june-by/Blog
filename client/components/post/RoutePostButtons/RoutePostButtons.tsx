import { useRouter } from "next/router";
import React from "react";
import { useGetPostQuery } from "Hooks/Post";
import { PostPageDataType } from "Types/post";
import styles from "./styles.module.scss";
import RoutePostButton from "../RoutePostButtons/RoutePostButton";
import LoadingOrNot from "components/shared/LoadingOrNot";
import useQueryId from "Hooks/useQueryId";

const RoutePostButtons = () => {
  const id = useQueryId();

  const { data } = useGetPostQuery({ id });

  if (!data) {
    return null;
  }

  const {
    prevPost: { OtherId: prevPostId, OtherTitle: prevPostTitle },
    nextPost: { OtherId: nextPostId, OtherTitle: nextPostTitle },
  } = data;

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
