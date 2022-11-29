import CloseIcon from "components/Icon/close";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useContext, useRef } from "react";
import Modal from "utils/Modal";
import { ThemeContext } from "utils/ThemeContext";
import styles from "./styles.module.scss";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchModal = ({ setOpen }: Props) => {
  const router = useRouter();
  const searchRef = useRef<HTMLInputElement>(null);
  const { theme } = useContext(ThemeContext);

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
      <Modal setOpen={setOpen}>
        <>
          <div className={styles.LoginTitle}>
            <span>게시글 찾기</span>
            <button onClick={closeModal}>
              <CloseIcon fill={theme === "light" ? "black" : "white"} />
            </button>
          </div>
          <form onSubmit={submit} className={styles.Form}>
            <input
              data-testid="searchInput"
              ref={searchRef}
              placeholder="특정 키워드를 입력해주세요"
            />
            <button>검색</button>
          </form>
        </>
      </Modal>
    </div>
  );
};

export default SearchModal;
