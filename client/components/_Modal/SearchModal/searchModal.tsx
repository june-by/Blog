import CloseIcon from "components/Icon/close";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import Modal from "components/_hoc/Modal";
import styles from "./styles.module.scss";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchModal = ({ setOpen }: Props) => {
  const { push } = useRouter();
  const searchRef = useRef<HTMLInputElement | null>(null);

  const closeModal = () => {
    setOpen(false);
  };

  const submitSearchKeyword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchRef.current) return;
    closeModal();
    return push({
      pathname: "/posts",
      query: { search: searchRef.current.value },
    });
  };

  return (
    <div>
      <Modal setOpen={setOpen}>
        <>
          <div className={styles.LoginTitle}>
            <span>게시글 찾기</span>
            <button onClick={closeModal} data-testid="searchCloseBtn">
              <CloseIcon />
            </button>
          </div>
          <form onSubmit={submitSearchKeyword} className={styles.Form}>
            <input data-testid="searchInput" ref={searchRef} placeholder="특정 키워드를 입력해주세요" />
            <button>검색</button>
          </form>
        </>
      </Modal>
    </div>
  );
};

export default SearchModal;
