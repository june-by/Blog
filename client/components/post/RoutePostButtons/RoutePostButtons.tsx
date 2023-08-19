import { useRouter } from "next/router";
import React from "react";
import { useGetPostQuery } from "Hooks/Post";
import { PostType } from "Types/post";
import styles from "./styles.module.scss";
import RoutePostButton from "../RoutePostButtons/RoutePostButton";
import LoadingOrNot from "components/shared/LoadingOrNot";

const RoutePostButtons = () => {
  const router = useRouter();

  const { data, isLoading } = useGetPostQuery(Number(router.query.id));

  const {
    prevPost: { OtherId: prevPostId, OtherTitle: prevPostTitle },
    nextPost: { OtherId: nextPostId, OtherTitle: nextPostTitle },
  } = data as PostType;

  return (
    <LoadingOrNot isLoading={isLoading}>
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
    </LoadingOrNot>
  );
};

export default RoutePostButtons;
