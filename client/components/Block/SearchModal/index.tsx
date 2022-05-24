import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useRef } from "react";
import Modal from "../../../utils/Modal";
import styles from "./styles.module.scss";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchModal = ({ open, setOpen }: Props) => {
  const router = useRouter();
  const searchRef = useRef<HTMLInputElement>(null);
  const closeModal = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const submit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!searchRef.current) return;
      closeModal();
      return router.push({
        pathname: "/filter",
        query: { search: searchRef.current.value },
      });
    },
    [closeModal, router]
  );

  return (
    <div>
      <Modal open={open} setOpen={setOpen}>
        <>
          <div className={styles.LoginTitle}>
            <span>게시글 찾기</span>
            <button onClick={closeModal}>
              <Image src="/close_btn.png" width={35} height={35} alt="닫기" />
            </button>
          </div>
          <form onSubmit={submit} className={styles.Form}>
            <input ref={searchRef} placeholder="특정 키워드를 입력해주세요" />
            <button>검색</button>
          </form>
        </>
      </Modal>
    </div>
  );
};

export default SearchModal;
