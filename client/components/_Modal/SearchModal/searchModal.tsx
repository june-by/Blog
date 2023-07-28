import { useRouter } from "next/router";
import React, { useRef } from "react";
import { useHeaderContext } from "context/headerContext";
import DefaultModal from "components/shared/DefaultModal";
import ModalView from "components/shared/ModalView";

const { Header, Title, CloseButton, Form, Input, SubmitButton } = ModalView;

const SearchModal = () => {
  const { closeSearch, isSearchModalOpen } = useHeaderContext();
  const { push } = useRouter();
  const searchRef = useRef<HTMLInputElement | null>(null);

  const submitSearchKeyword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchRef.current) return;
    closeSearch();
    return push({
      pathname: "/",
      query: { search: searchRef.current.value },
    });
  };

  return (
    <DefaultModal closeModal={closeSearch} isOpen={isSearchModalOpen}>
      <ModalView>
        <Header>
          <Title title="게시글 찾기" />
          <CloseButton handleClose={closeSearch} data-testid="searchCloseBtn" />
        </Header>
        <Form handleSubmit={submitSearchKeyword}>
          <Input data-testid="searchInput" ref={searchRef} placeholder="특정 키워드를 입력해주세요" />
          <SubmitButton>검색</SubmitButton>
        </Form>
      </ModalView>
    </DefaultModal>
  );
};

export default SearchModal;
