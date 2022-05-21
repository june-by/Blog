import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { useDeletePost } from "../../../../Hooks/Post";
import useGotoPage from "../../../../Hooks/useGotoPage";
import { useGetUserInfo } from "../../../../Hooks/User";
import { dateForm } from "../../../../utils/dateForm";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  category: string;
  createdAt: Date;
}

const PostTop = ({ title, createdAt, category }: Props) => {
  const gotoPage = useGotoPage();
  const router = useRouter();
  const deleteMutation = useDeletePost();

  const goBack = useCallback(() => {
    router.back();
  }, []);

  const deletePost = useCallback(() => {
    deleteMutation.mutate(Number(router.query.id));
  }, []);

  const { data: UserInfo } = useGetUserInfo();
  return (
    <div className={styles.PostTop}>
      <div className={styles.TopArea}>
        <div>
          <button onClick={goBack} className={styles.goBackBtn}>
            <img src="/back_icon.png" alt="뒤로가기" />
            <span>뒤로가기</span>
          </button>
        </div>
        <div>
          {UserInfo?.nickname === "By_juun" && (
            <button className={styles.DeleteBtn} onClick={deletePost}>
              글 삭제하기
            </button>
          )}
        </div>
      </div>
      <h1 className={styles.PostTitle}>{title}</h1>
      <div className={styles.AdditionalInfo}>
        <span>{dateForm(createdAt)}</span>
        <button onClick={gotoPage(`/category/${category}`)}>{category}</button>
      </div>
    </div>
  );
};

export default PostTop;
