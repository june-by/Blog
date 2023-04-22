import { useRouter } from "next/router";
import React, { useRef } from "react";
import Modal from "components/_hoc/Modal";
import styles from "./styles.module.scss";
import { useHeaderContext } from "context/headerContext";
import CloseButton from "../common/closeButton";

const SearchModal = () => {
  const { closeSearch } = useHeaderContext();
  const { push } = useRouter();
  const searchRef = useRef<HTMLInputElement | null>(null);

  const submitSearchKeyword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchRef.current) return;
    closeSearch();
    return push({
      pathname: "/posts",
      query: { search: searchRef.current.value },
    });
  };

  return (
    <div>
      <Modal closeModal={closeSearch}>
        <>
          <div className={styles.LoginTitle}>
            <span>게시글 찾기</span>
            <CloseButton onClick={closeSearch} data-testid="searchCloseBtn" />
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
